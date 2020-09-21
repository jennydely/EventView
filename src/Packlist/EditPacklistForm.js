import React from 'react'
import { useHistory } from 'react-router-dom'
import backIcon from '../img/backIcon.svg'
import PacklistForm from './PacklistForm'

export default function EditPacklistForm() {
  const history = useHistory()
  function goBackButton() {
    history.goBack()
  }

  return (
    <>
      <header>
        <h1>Create PackList</h1>
      </header>
      <main>
        <PacklistForm />
      </main>
      <footer>
        <button type="button" onClick={goBackButton}>
          <img src={backIcon} alt="back" />
        </button>
      </footer>
    </>
  )
}
