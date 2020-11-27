import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Label from '../components/common/Label'
import  { Input } from '../components/common/Select'


export default function StartPage() {
  const history = useHistory()
  
  return (
    <>
      <header>
      <Headline>{'EventView'}</Headline>
      </header>
      <main>
       <p> <h3>Find, add & organize your individual events and packlists!</h3></p>
             {/*  <Form data-testid="login" onSubmit={handleSubmit(onSubmit)}>
          <UsernameLabel htmlFor="username">Username:</UsernameLabel>
          <UsernameInput id="username" />
           <PasswordLabel htmlFor="password">Password:</PasswordLabel>
         <PasswordInput type="password" id="password"/> 
          </Form>
  */}      <div>  
        <StyledButton onClick={signInWithGoogle}>Login</StyledButton>
        <DescriptionText> Use your Google account to login and get access to several more options</DescriptionText>
        </div>   
         <StyledButton onClick={continueAsGuest}> Guest</StyledButton>
              <DescriptionText> Continue as guest and explore many events</DescriptionText>
       
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
        history.push('/userpage')
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

function continueAsGuest (){
  history.push('/guestpage')
}
}

const Headline = styled.h1`
  padding: 20px;
  margin: 7px;
  text-align: center;
`
/*const Form = styled.form`
  align-content: center;
  overflow: hidden;
  min-width: 365px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
` */

const StyledButton=styled.button`
color: var(--font-color);
background: var(--background);
border-radius: 7px;
padding:7px;
margin-top: 20px;
`

const DescriptionText= styled.p`
text-align: center;
margin: 5px 40px;
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
