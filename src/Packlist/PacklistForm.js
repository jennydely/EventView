import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import ErrorMessage from '../common/ErrorMessage'
import PropTypes from 'prop-types'
import ListContainer from '../common/ListContainer'
import ListItem from '../common/ListItem'

PacklistForm.propTypes = {
  onPacklistSave: PropTypes.func.isRequired,
  onPacklistCancel: PropTypes.func.isRequired,
}

export default function PacklistForm({ onPacklistCancel, onPacklistSave }) {
  const { register, handleSubmit, errors } = useForm()
  const [items, setItems] = useState([])
  const onSubmit = (packlist, event) => {
    // for testing...
    if (event && event.target && typeof event.target.reset === 'function')

      event.target.reset()
    onPacklistSave({ name: packlist.name, packlist: [packlist.item] })
  }

  return (
    <>
      <h1>Create PackList</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputContainer>
          <PacklistNameInputLabel>Name of the new PackList:</PacklistNameInputLabel>
          <PacklistNameInput
            placeholder="packList name"
            id="name"
            name="name"
            ref={register({
              required: true, minLength: 3, maxLength: 10,
              validate: value => value && value.trim().length >= 3 && value.trim().length <= 10
            })} />
          {errors.name && errors.name.type === 'required' && (
            <ErrorMessageNameReq>Name is required!</ErrorMessageNameReq>
          )}
          {errors.name && (errors.name.type === 'validate' || errors.name.type === 'minLength') && (
            <ErrorMessageName>
              This field requires at least 3 characters!
            </ErrorMessageName>
          )}
          {errors.name && (errors.name.type === 'validate' || errors.name.type === 'maxLength') && (
            <ErrorMessageName>
              The name can reach a maximum of 10 characters!
            </ErrorMessageName>
          )}

          <ItemInputLabel htmlFor="itemInput">Create new item or task:</ItemInputLabel>
          <ItemInput
            placeholder="item you need or task you have to do"
            id="itemInput"
            name="item"
            ref={register({
              required: true, minLength: 3, maxLength: 20,
              validate: value => value && value.trim().length >= 3 && value.trim().length <= 20
            })}
          />
          <button onClick={createItem}>Add todo</button>

          {errors.item && (errors.item.type === 'validate' || errors.item.type === 'minLength') && (
            <ErrorMessageItem>
              This field requires at least 3 characters!
            </ErrorMessageItem>
          )}
          {errors.item && (errors.item.type === 'validate' || errors.item.type === 'maxLength') && (
            <ErrorMessageItem>
              The Item can reach a maximum of 20 characters!
            </ErrorMessageItem>
          )}
          <ListContainer>
            {items.map(({text, completed, id}, index) => (
              <ListItem key={id} text={text}><input type="checkbox" checked={completed}/>{text}  <DeleteButton onClick={() => deleteItem(index)} type="button">X</DeleteButton> </ListItem>
            ))}
          </ListContainer>
        </FormInputContainer>

        <ButtonGroup>
          <button onClick={onPacklistCancel} type="button">
            Cancel
    </button>
          <SubmitButton type="submit">Save</SubmitButton>
        </ButtonGroup>
      </Form>
    </>
  )

  function createItem(input) {
    input.preventDefault()
    const form = input.target
    const inputItem = form.item
    addItem({ text: inputItem.value, id: uuid() })
    form.reset()
    input.focus()
  }

  function addItem(item) {
    setItems([item, ...items])
  }

  function deleteItem(index) {
    setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ])
  }
}


const Form = styled.form`
align-content: center;
min-width: 300px;
`
const FormInputContainer = styled.div`
display:grid;
grid-template-columns: auto;
grid-template-rows: repeat(7,auto);
align-content: center;
min-width: 300px;
gap: 4px;
border-radius: 7px;
border: 2px solid black;
margin: 7px;
margin-top:0;
padding: 7px 4px;
padding-bottom: 20px;
`

const PacklistNameInputLabel = styled(Label)`
grid-column: 1;
grid-row: 1;
text-align:left;
`
const PacklistNameInput = styled(Input)`
grid-column: 1;
grid-row: 2;
`
const ErrorMessageNameReq = styled(ErrorMessage)`
grid-column: 1;
grid-row: 3;
`
const ErrorMessageName = styled(ErrorMessage)`
grid-column: 1;
grid-row: 3;
`

const ItemInputLabel = styled(Label)`
grid-column: 1;
grid-row: 4;
text-align:left;
`
const ItemInput = styled(Input)`
grid-column: 1;
grid-row: 5;
`

const ErrorMessageItem = styled(ErrorMessage)`
grid-column: 1;
grid-row: 6;
`

const ButtonGroup = styled.div`
grid-column: 1;
grid-row: 8;
display: flex;
justify-content: center;
width: 100%;
maring:7px;
margin-top: 30px;
`
const SubmitButton = styled.button`
  background-color: rgba(111,29,27,0.75);
`
const DeleteButton= styled.button`
color: rgba(246, 71, 71, 1);
text-decoration: none;
border:none;
background:none;
`