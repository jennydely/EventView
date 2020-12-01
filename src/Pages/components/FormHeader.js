import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import backIcon from '../../img/backIcon.svg'
import homeIcon from '../../img/homeIcon.svg'
import { UserContext } from "../../../providers/UserProvider";

export default function FormHeader({ headerText, headerButton }) {
  const history = useHistory()
  const user = useContext(UserContext);

  function goBack() {
    history.goBack()
  }
  function goHome() {
    user ? history.push('/userpage') : history.push('/')
  }

  return (
    <StyledHeader>
      <StyledButtons type="button" onClick={goBack}>
        <img src={backIcon} alt="back" />
      </StyledButtons>
      <StyledButtons type="button" onClick={goHome}>
        <img src={homeIcon} alt="home" />
      </StyledButtons>
      <Headline>{headerText}</Headline>
      {headerButton}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  justify-content: flex-start;
`

const StyledButtons = styled.button`
  padding: 22px 0 0 0;
  margin: 0 7px;
`
const Headline = styled.h1`
  padding: 20px 0 0 0;
  margin: 0 7px;
  text-align: center;
`
