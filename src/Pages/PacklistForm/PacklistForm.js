import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
import { editPacklist, addPacklist } from '../../redux/actions'
import Input from '../components/common/Input'
import Label from '../components/common/Label'
import Checkbox from '../components/common/Checkbox'
import ErrorMessage from '../components/common/ErrorMessage'
import SelectTemplate from '../components/common/SelectTemplate'
import ListContainer from '../components/common/ListContainer'
import ListItem from '../components/common/ListItem'
import FormHeader from '../components/FormHeader'
import Footer from '../components/FormFooter'
import addIcon from '../../img/addIcon.svg'
import usePacklists from '../Packlist/usePacklists'
import { getUniquePacklists } from './services/getUniquePacklists'
import { getUniqueItems } from './services/getUniqueItems'

export function PacklistForm({ editPacklist, addPacklist }) {
  const { register, handleSubmit, errors } = useForm()
  const { packlistId } = useParams()
  const { packlists } = usePacklists()
  const packlistToEdit = searchForEditPacklist()
  const [items, setItems] = useState([])
  const [itemError, setItemError] = useState(false)
  const itemRef = useRef(null)

  const history = useHistory()
  const uniquePacklists = getUniquePacklists(packlists)
  const uniqueItems = getUniqueItems(items)
  const onSubmit = (packlist, event) => {
    event.preventDefault()
    const isExistingPacklist = packlists.some(
      (existingPacklist) => packlist.name === existingPacklist.name
    )

    if (isExistingPacklist) {
      editPacklist({
        ...packlist,
        id: packlistToEdit.id,
        packlist: items,
      })
    } else {
      addPacklist({ name: packlist.name, packlist: items, id: uuid() })
    }
    history.push('/packlist/' + packlist.name)
  }
  const handlePacklistKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addItem({ item: event.target.value, itemID: uuid() })
    }
  }
  useEffect(() => {
    if (packlistToEdit?.packlist) setItems(packlistToEdit?.packlist)
  }, [packlistToEdit])

  return (
    <>
      <FormHeader
        headerText={packlistToEdit ? 'Edit PackList' : 'Create PackList'}
      />
      <main>
        <Form data-testid="packlistform" onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <PacklistNameInputLabel htmlFor="name">
              Name of the new PackList:
            </PacklistNameInputLabel>
            <Input
              placeholder="PackList name"
              id="name"
              name="name"
              defaultValue={packlistToEdit?.name}
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 20,
                validate: {
                  length: (value) =>
                    value?.trim().length >= 3 && value?.trim().length <= 20,
                  nameTaken: (value) =>
                    !!packlistId ||
                    !packlists.some((packlist) => packlist.name === value),
                },
              })}
            />
            {errors.name?.type === 'required' && (
              <ErrorMessage>Name is required!</ErrorMessage>
            )}
            {errors.name?.type === 'nameTaken' && (
              <ErrorMessage>Name is taken!</ErrorMessage>
            )}
            {(errors.name?.type === 'validate' ||
              errors.name?.type === 'minLength') && (
                <ErrorMessage>
                  This field requires at least 3 characters!
                </ErrorMessage>
              )}
            {(errors.name?.type === 'validate' ||
              errors.name?.type === 'maxLength') && (
                <ErrorMessage>
                  The name can reach a maximum of 20 characters!
                </ErrorMessage>
              )}
            <Label htmlFor="itemInput">Create new item or task:</Label>
            <Input
              placeholder="Item you need or task you have to do"
              id="itemInput"
              name="item"
              onKeyDown={handlePacklistKeyDown}
              ref={(el) => {
                itemRef.current = el
              }}
            />
            <HiddenInput
              name="shouldHaveOneItem"
              ref={register({
                validate: () => {
                  return items.length > 0
                },
              })}
            />

            {errors.shouldHaveOneItem?.type === 'validate' && (
              <ErrorMessage>You need to add one item/task!</ErrorMessage>
            )}

            {itemError && (
              <ErrorMessage>
                'This item field requires at least 3 characters and can reach a
                maximum of 33 characters!'
              </ErrorMessage>
            )}

            <AddButton
              type="button"
              onClick={() => {
                addItem({ item: itemRef.current.value, itemID: uuid() })
              }}
            >
              <img src={addIcon} alt="add" />
            </AddButton>
            <StyledListContainer>
              {uniqueItems?.map(({ item, completed, itemID }, index) => (
                <ListItem key={item} id={itemID} text={item}>
                  <ItemContainer>
                    <Checkbox type="checkbox" checked={completed} />
                    <TextSpan>{item}</TextSpan>
                  </ItemContainer>
                  <DeleteButton onClick={() => deleteItem(index)} type="button">
                    X
                  </DeleteButton>
                </ListItem>
              ))}
            </StyledListContainer>
            <Label htmlFor="packlistTemplate">Use packlist as template:</Label>
            <TemplateDropDown
              id="packlistTemplate"
              defaultValue=" "
              name="packlistName"
              options={uniquePacklists}
              addMultiplyItems={addMultiplyItems}
            />
          </FormInputContainer>
        </Form>
      </main>
      <Footer handleSubmit={handleSubmit(onSubmit)} />
    </>
  )

  function addItem(item) {
    if (item.item?.trim().length >= 3 && item.item?.trim().length <= 25) {
      setItems([item, ...items])
      itemRef.current.value = ''
      setItemError(false)
    } else setItemError(true)
  }

  function addMultiplyItems(templateName) {
    const templatePacklist = packlists.find(
      (packlist) => templateName.name === packlist.name
    )
    setItems([...templatePacklist.packlist, ...items])
  }

  function deleteItem(index) {
    setItems([...items.slice(0, index), ...items.slice(index + 1)])
  }

  function searchForEditPacklist() {
    const index = packlists.findIndex(
      (packlist) => '' + packlist.id === packlistId
    )
    const editPacklist = packlists[index]
    return editPacklist
  }
}

const mapDispatchToProps = { addPacklist, editPacklist }

export default connect(
  null, 
  mapDispatchToProps
  )  (PacklistForm)

const Form = styled.form`
  align-content: center;
  overflow: hidden;
  min-width: 365px;
`
const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 300px;
  border-radius: 7px;
  border: var(--borderUL);
  margin: 7px;
  margin-top: 0;
  padding: 7px 4px;
`
const PacklistNameInputLabel = styled(Label)`
  text-align: left;
`
const AddButton = styled.button`
  align-self: center;
  margin: 14px;
`
const StyledListContainer = styled(ListContainer)`
  border: none;
`
const TextSpan = styled.span`
  width: 100%;
  color: var(--font-color);
`
const HiddenInput = styled.input`
  display: none;
`
const ItemContainer = styled.label`
  display: flex;
  align-items: center;
`
const DeleteButton = styled.button`
  color: var(--deleteX);
  float: right;
  text-decoration: none;
  border: none;
  background: none;
  padding: 0;
`
const TemplateDropDown = styled(SelectTemplate)`
  grid-column: 1;
  grid-row: 8;
`
