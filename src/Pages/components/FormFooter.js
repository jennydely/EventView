import React from 'react'
import saveIcon from '../../img/saveIcon.svg'

export default function Footer({ handleSubmit }) {
  return (
    <footer>
      <button type="submit" onClick={handleSubmit}>
        <img src={saveIcon} alt="save" />
      </button>
    </footer>
  )
}
