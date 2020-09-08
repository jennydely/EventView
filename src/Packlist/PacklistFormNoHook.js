import React, { useState } from 'react';
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'

export default function Packlist({onPacklistSave }) {
    const [items, setItems] = useState([])
    return (
        <>
            <h1>Create Packlist</h1>
            <form onSubmit={handleSubmit} >
            <label htmlFor="packlistName" >Füge hier ein Packlist name ein: </label>
            <input id="packlistName" name="name" placeholder="packlist name"/>
      <label htmlFor="item-input" >Füge hier ein neues Todo ein: </label>
      <input id="item-input" name="item" />
      <button type="button" onSubmit={onCreateTodo} >Add</button>
            <ul>
                    {items.map(({ text, completed, id }, index) => (
                    <ListItem key={id} text={text}>
                        <input type="checkbox" checked={completed} />
                        {text}
                        <DeleteButton onClick={deleteItem(index)} type="button">X</DeleteButton>
                    </ListItem>
                    ))}
            </ul>
                        <button type="submit" >Add</button>
            </form>
        </>
    )

    function onCreateTodo(event, input) {
        event.preventDefault()
        const text = input.item.value
        addItem({ text, id: uuid() })
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
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const packlist = setItems()
        const name= form.input.packlistName.value
        onPacklistSave({ name, packlist })
        event.target.reset()
    }
}

const ListItem = styled.li`
display:flex;
justify-content:left;
  list-style-type: none;
  margin: 5px 0;
`
const DeleteButton = styled.button`
border-radius: 10px;
margin: 0 5px;
color: rgba(246, 71, 71, 1);
text-decoration: none;
border:none;
background:none;
`
/*

     
Event die man rausreicht nennt man mit on! Dort wo das Event stattfindet nennt man es handle!
form.todo.value  das ist der Wert vom Inputfeld! */