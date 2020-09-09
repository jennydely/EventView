import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import Checkbox from '../common/Checkbox'
import ErrorMessage from '../common/ErrorMessage'
import PropTypes from 'prop-types'
import ListContainer from '../common/ListContainer'
import ListItem from '../common/ListItem'

PacklistForm.propTypes = {
  onPacklistSave: PropTypes.func.isRequired,
}

export default function PacklistForm({ onPacklistSave }) {
  const { register, handleSubmit, reset, errors } = useForm()
  const [items, setItems] = useState([])
  const itemRef = useRef(null)
  const onSubmit = (packlist, event) => {
    event.preventDefault()
    // for testing...
    if (event?.target && typeof event?.target.reset === 'function')
      event.target.reset()
    onPacklistSave({ name: packlist.name, packlist: [packlist.item] })
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {' '}
        {/* its neccesary to remove the enter key as submit function! */}
        <FormInputContainer>
          <PacklistNameInputLabel htmlFor="name">
            Name of the new PackList:
          </PacklistNameInputLabel>
          <PacklistNameInput
            placeholder="PackList name"
            id="name"
            name="name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 10,
              validate: (value) =>
                value && value.trim().length >= 3 && value.trim().length <= 10,
            })}
          />
          {errors.name?.type === 'required' && (
            <ErrorMessageNameReq>Name is required!</ErrorMessageNameReq>
          )}
          {(errors.name?.type === 'validate' ||
            errors.name?.type === 'minLength') && (
            <ErrorMessageName>
              This field requires at least 3 characters!
            </ErrorMessageName>
          )}
          {(errors.name?.type === 'validate' ||
            errors.name?.type === 'maxLength') && (
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
              itemRef.current = el
              return register(el, {
                required: true,
                minLength: 3,
                maxLength: 20,
                validate: (value) =>
                  value &&
                  value.trim().length >= 3 &&
                  value.trim().length <= 20,
              })
            }}
          />

          {(errors.itemRef?.type === 'validate' ||
            errors.itemRef?.type === 'minLength') && (
            <ErrorMessage>
              This field requires at least 3 characters!
            </ErrorMessage>
          )}
          {(errors.item?.type === 'validate' ||
            errors.item?.type === 'maxLength') && (
            <ErrorMessage>
              The Item can reach a maximum of 20 characters!
            </ErrorMessage>
          )}

          <AddButton
            type="button"
            onClick={(packlistitem) => {
              itemRef.current.value?.trim().length >= 3 &&
                itemRef.current.value?.trim().length <= 20 &&
                addItem({ text: itemRef.current.value, id: uuid() })
            }}
          >
            {' '}
            Add
          </AddButton>
          {/* Eingabefeld sollte nach erstellung des Items gecleared werden */}

          <ItemContainer>
            {items.map(({ text, completed, id }, index) => (
              <ListItem key={id} text={text}>
                <Checkbox type="checkbox" checked={completed} />
                <TextSpan>{text}</TextSpan>
                <DeleteButton onClick={() => deleteItem(index)} type="button">
                  X
                </DeleteButton>
              </ListItem>
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

  function addItem(item) {
    setItems([item, ...items])
  }

  function deleteItem(index) {
    setItems([...items.slice(0, index), ...items.slice(index + 1)])
  }
}

const Form = styled.form`
  align-content: center;
  min-width: 300px;
`
const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 300px;
  border-radius: 7px;
  border: 2px solid black;
  margin: 7px;
  margin-top: 0;
  padding: 7px 4px;
  padding-bottom: 20px;
`
const PacklistNameInputLabel = styled(Label)`
  text-align: left;
`
const PacklistNameInput = styled(Input)``
const ErrorMessageNameReq = styled(ErrorMessage)``
const ErrorMessageName = styled(ErrorMessage)``
const AddButton = styled.button`
  align-self: center;
  margin: 14px;
`
const ItemContainer = styled(ListContainer)`
  border: none;
`
const TextSpan = styled.span`
  width: 100%100%;
`
const DeleteButton = styled.button`
  color: rgba(246, 71, 71, 1);
  float: right;
  text-decoration: none;
  border: none;
  background: none;
  padding: 0%;
`
const ButtonGroup = styled.div`
  grid-column: 1;
  grid-row: 8;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 7px;
  margin-top: 30px;
`
const SubmitButton = styled.button`
  background-color: rgba(111, 29, 27, 0.75);
`
