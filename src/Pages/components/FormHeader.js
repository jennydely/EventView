import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import backIcon from '../../img/backIcon.svg'
import homeIcon from '../../img/homeIcon.svg'
import { UserContext } from "../../providers/UserProvider";

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
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 0 0;
  max-height: 55px;
  min-width: 365px;
`

const StyledButtons = styled.button`
  margin: 0 7px;
`
const Headline = styled.h1`
  margin: 0 7px;
  text-align: center;
`
