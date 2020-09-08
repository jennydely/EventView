import React, { useState, useRef } from 'react'
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
}

export default function PacklistForm({onPacklistSave }) {
  const { register, handleSubmit, reset, errors } = useForm()
  const [items, setItems] = useState([])
  const ItemRef = useRef(null)
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
            placeholder="PackList name"
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
          <Label htmlFor="itemInput">Create new item or task:</Label>
          <Input
            placeholder="item you need or task you have to do"
            id="itemInput"
            name="item"
            ref={(el) => {
              ItemRef.current = el
              register(el, {
                required: true, minLength: 3, maxLength: 20,
                validate: value => value && value.trim().length >= 3 && value.trim().length <= 20
              })
            }}
          />
          <AddButton type="button" onClick={createItem}>Add</AddButton>

          {errors.item && (errors.item.type === 'validate' || errors.item.type === 'minLength') && (
            <ErrorMessageNameReq>
              This field requires at least 3 characters!
            </ErrorMessageNameReq>
          )}
          {errors.item && (errors.item.type === 'validate' || errors.item.type === 'maxLength') && (
            <ErrorMessage>
              The Item can reach a maximum of 20 characters!
            </ErrorMessage>
          )}
          <ItemContainer>
            {items.map(({ text, completed, id }, index) => (
              <ListItem key={id} text={text}><input type="checkbox" checked={completed} />{text}  <DeleteButton onClick={() => deleteItem(index)} type="button">X</DeleteButton> </ListItem>
            ))}
          </ItemContainer>
        </FormInputContainer>

        <ButtonGroup>
          <button type="reset" onClick={() => reset()}>
            Reset
          </button>
          <SubmitButton type="submit">Save</SubmitButton>
        </ButtonGroup>
      </Form>
    </>

  )
  function createItem(itemRef) {
    itemRef.current.value.preventDefault()
    console.log(itemRef.current.value)
    addItem({ text: itemRef.current.value, id: uuid() })
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
display:flex;
flex-direction: column;
align-items: flex-start;
min-width: 300px;
border-radius: 7px;
border: 2px solid black;
margin: 7px;
margin-top:0;
padding: 7px 4px;
padding-bottom: 20px;
`
const PacklistNameInputLabel = styled(Label)`
text-align:left;
`
const PacklistNameInput = styled(Input)`
`
const ErrorMessageNameReq = styled(ErrorMessage)`
`
const ErrorMessageName = styled(ErrorMessage)`
`
const AddButton = styled.button`
align-self:center;
`
const ItemContainer = styled(ListContainer)`
border: none;
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
const DeleteButton = styled.button`
color: rgba(246, 71, 71, 1);
text-decoration: none;
border:none;
background:none;
`