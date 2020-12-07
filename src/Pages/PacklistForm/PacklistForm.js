import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Input from '../components/common/Input'
import Label from '../components/common/Label'
import Select from '../components/common/Select'
import SelectTemplate from '../components/common/SelectTemplate'
import Checkbox from '../components/common/Checkbox'
import ErrorMessage from '../components/common/ErrorMessage'
import ListContainer from '../components/common/ListContainer'
import ListItem from '../components/common/ListItem'
import FormHeader from '../components/FormHeader'
import Footer from '../components/FormFooter'
import addIcon from '../../img/addIcon.svg'
import usePacklists from '../Packlist/usePacklists'
import { getUniquePacklists } from './services/getUniquePacklists'
import { getUniqueItems } from './services/getUniqueItems'
import usePacklistForm from './usePacklistForm'

export default function PacklistForm() {
  const { register, handleSubmit, errors } = useForm()
  const { packlistId } = useParams()
  const { packlists } = usePacklists()
  const packlistToEdit = editPacklist()
  const [items, setItems] = useState([])
  const [itemError, setItemError] = useState(false)
  const itemRef = useRef(null)
  const { onPacklistSaveEdit, onPacklistSave } = usePacklistForm()
  const history = useHistory()
  const uniquePacklists = getUniquePacklists(packlists)
  const uniqueItems = getUniqueItems(items)
  const onSubmit = (packlist, event) => {
    event.preventDefault()
    const isExistingPacklist = packlists.some(
      (existingPacklist) => packlist.name === existingPacklist.name
    )

    if (isExistingPacklist) {
      onPacklistSaveEdit({
        ...packlist,
        id: packlistToEdit.id,
        packlist: items,
      })
    } else {
      onPacklistSave({ name: packlist.name, packlist: items, id: uuid() })
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
            <TopDivContainer>
              <PacklistNameInputLabel htmlFor="name">
                Name of the new PackList:
            </PacklistNameInputLabel>
              <PacklistNameInput
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
                <ErrorMessagePacklist>Name is required!</ErrorMessagePacklist>
              )}
              {errors.name?.type === 'nameTaken' && (
                <ErrorMessagePacklist>Name is taken!</ErrorMessagePacklist>
              )}
              {(errors.name?.type === 'validate' ||
                errors.name?.type === 'minLength') && (
                  <ErrorMessagePacklist>
                    This field requires at least 3 characters!
                  </ErrorMessagePacklist>
                )}
              {(errors.name?.type === 'validate' ||
                errors.name?.type === 'maxLength') && (
                  <ErrorMessagePacklist>
                    The name can reach a maximum of 20 characters!
                  </ErrorMessagePacklist>
                )}

              <VisibilityInputLabel htmlFor="visibility">Visibility:</VisibilityInputLabel>
              <VisibilityInput
                name="visibility"
                id="visibility"
                defaultValue={packlistToEdit?.visibility}
                register={register({ required: true })}
                options={['private', 'public']}
              />
              {errors.visibility && errors.visibility.type === 'required' && (
                <ErrorMessageVisibility>
                  Visibility is required!
                </ErrorMessageVisibility>
              )}
            </TopDivContainer>

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

  function editPacklist() {
    const index = packlists.findIndex(
      (packlist) => '' + packlist.id === packlistId
    )
    const editPacklist = packlists[index]
    return editPacklist
  }
}

const Form = styled.form`
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
const TopDivContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 111px);
grid-template-rows: repeat(4, auto);
align-content: left;
overflow: hidden;
max-width: 365px;
padding: 2px;
gap: 4px;
`
const PacklistNameInputLabel = styled(Label)`
  text-align: left;
  grid-column: 1/ span 2;
  grid-row: 1;
`
const VisibilityInputLabel = styled(Label)`
  text-align: left;
  grid-column: 3;
  grid-row: 1;
`
const PacklistNameInput = styled(Input)`
grid-column: 1 / 3;
grid-row: 2;
`
const VisibilityInput = styled(Select)`
grid-column: 3;
grid-row: 2;
display: block;
  padding: 20px;
  border: var(--borderColor);
  background: var(--optionsBG);
  border-radius: 4px;
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
`
const ErrorMessagePacklist = styled(ErrorMessage)`
  grid-column: 1/span2;
  grid-row: 3;
`
const ErrorMessageVisibility = styled(ErrorMessage)`
  grid-column: 1/span2;
  grid-row: 4;
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
  display: block;
  padding: 20px;
  border: var(--borderColor);
  background: var(--optionsBG);
  border-radius: 4px;
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
`
