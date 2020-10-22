import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Label from '../components/common/Label'
import  { Input } from '../components/common/Select'
import loginIcon from '../../img/loginIcon.svg'
import FormHeader from '../components/FormHeader'

export default function LoginPage() {
  const history = useHistory()
  const {handleSubmit } = useForm({
  })

  const onSubmit = (event) => {
    event.preventDefault()
     history.go(0)
  }

  return (
    <>
      <FormHeader headerText={'Login'} />
      <main>
        <Form data-testid="login" onSubmit={handleSubmit(onSubmit)}>
          <UsernameLabel htmlFor="username">Username:</UsernameLabel>
          <UsernameInput id="username" />
           <PasswordLabel htmlFor="password">Password:</PasswordLabel>
         <PasswordInput type="password" id="password"/>
         <button type="submit" onClick={handleSubmit}>
        <img src={loginIcon} alt="login" />
      </button>
        </Form>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </main>
        </>
  )

 
function signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        history.push('/')
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
}
}

const Form = styled.form`
  align-content: center;
  overflow: hidden;
  min-width: 365px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`
const UsernameLabel = styled(Label)`
  align-self: center;
`
const PasswordLabel = styled(Label)`
  align-self: center;
`

const UsernameInput = styled(Input)`
  align-self: center;
`

const PasswordInput = styled(Input)`
align-self: center;
`
