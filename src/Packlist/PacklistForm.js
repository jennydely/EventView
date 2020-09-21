import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import Checkbox from '../common/Checkbox'
import ErrorMessage from '../common/ErrorMessage'
import SelectTemplate from '../common/SelectTemplate'
import ListContainer from '../common/ListContainer'
import ListItem from '../common/ListItem'
import usePacklists from './usePacklists'
import reloadIcon from '../img/reloadIcon.svg'
import saveIcon from '../img/saveIcon.svg'
import addIcon from '../img/addIcon.svg'
import { useParams, useHistory } from 'react-router-dom'
import usePacklistForm from './usePacklistForm'
import { getUniquePacklists } from '../services/getUniquePacklists'

export default function PacklistForm() {
  const { register, handleSubmit, reset, errors } = useForm()
  const { packlistId } = useParams()
  const { packlists } = usePacklists()
  const packlistToEdit = editPacklist()
  const [items, setItems] = useState([])
  const [itemError, setItemError] = useState(false)
  const itemRef = useRef(null)
  const { onPacklistSaveEdit, onPacklistSave } = usePacklistForm()
  const history = useHistory()
  const uniquePacklists = getUniquePacklists(packlists)

  const onSubmit = (packlist, event) => {
    event.preventDefault()
    const isExistingPacklist = packlists.some(
      (existingPacklist) => packlist.name === existingPacklist.name
    )
    if (isExistingPacklist) {
      onPacklistSaveEdit({
        ...packlist,
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
              maxLength: 25,
              validate: {
                length: (value) =>
                  value?.trim().length >= 3 && value?.trim().length <= 25,
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
              The name can reach a maximum of 25 characters!
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
              maximum of 20 characters!'
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
          <ItemContainer>
            {items.map(({ item, completed, itemID }, index) => (
              <ListItem key={itemID} text={item}>
                <Checkbox type="checkbox" checked={completed} />
                <TextSpan>{item}</TextSpan>
                <DeleteButton onClick={() => deleteItem(index)} type="button">
                  X
                </DeleteButton>
              </ListItem>
            ))}
          </ItemContainer>
        </FormInputContainer>
        <ButtonGroup>
          <button type="reset" onClick={() => reset()}>
            <img src={reloadIcon} alt="reload" />
          </button>
          <button type="submit">
            <img src={saveIcon} alt="save" />
          </button>
        </ButtonGroup>
      </Form>
      <TemplateDropDown
        id="packlistTemplate"
        defaultValue=" "
        name="packlistName"
        options={uniquePacklists}
        addMultiplyItems={addMultiplyItems}
      />
    </>
  )

  function addItem(item) {
    if (item.item?.trim().length >= 3 && item.item?.trim().length <= 20) {
      setItems([item, ...items])
      itemRef.current.value = ''
      setItemError(false)
    } else setItemError(true)
  }

  function addMultiplyItems(templateName) {
    const templatePacklist = packlists.find(
      (packlist) => templateName === packlist.name
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
  border: var(--border-darkgrey);
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
const ItemContainer = styled(ListContainer)`
  border: none;
`
const TextSpan = styled.span`
  width: 100%;
  color: var(--lightyellow-90);
`
const HiddenInput = styled.input`
  display: none;
`
const DeleteButton = styled.button`
  color: var(--red-main);
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

const ButtonGroup = styled.div`
  grid-column: 1;
  grid-row: 9;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 7px;
  margin-top: 30px;
`
