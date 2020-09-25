import React from 'react'
import { useHistory } from 'react-router-dom'
import backIcon from '../../img/backIcon.svg'
import homeIcon from '../../img/homeIcon.svg'

export default function Footer() {
  const history = useHistory()
  function goBack() {
    history.goBack()
  }
  function goHome() {
    history.push('/')
  }
  return (
    <footer>
      <button type="button" onClick={goHome}>
        <img src={homeIcon} alt="home" />
      </button>
      <button type="button" onClick={goBack}>
        <img src={backIcon} alt="back" />
      </button>
    </footer>
  )
}
