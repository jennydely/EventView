import React, { useEffect, useContext } from 'react'
import { auth } from "../../firebase/firebase";
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Label from '../components/common/Label'
import Select from '../components/common/Select'
import Footer from '../components/FormFooter'
import FormHeader from '../components/FormHeader'
import useSettings from './useSettings'
import { UserContext } from "../../providers/UserProvider";

export default function SettingsPage() {
  const themes = ['black', 'turquoise', 'grey']
  const history = useHistory()
  const { settings, updateSettings } = useSettings()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: settings,
  })
  const user = useContext(UserContext);
  const onSubmit = (settings, event) => {
    event.preventDefault()
    updateSettings(settings)
    history.go(0)
  }

  useEffect(() => {
    reset(settings)
  }, [settings, reset])

  return (
    <>
      <FormHeader headerText={'Settings'} />
      <main>
        {user ?
          <button onClick={logOut}>Log out</button> : ''}
        <Form data-testid="settingsform" onSubmit={handleSubmit(onSubmit)}>
          <ThemeLabel htmlFor="theme">Select your theme color:</ThemeLabel>
          <ThemeSelect
            name="theme"
            data-testid="theme"
            id="theme"
            register={register()}
            options={themes}
          ></ThemeSelect>
        </Form>
      </main>
      <Footer handleSubmit={handleSubmit(onSubmit)} />
    </>
  )
}

function logOut() {
  auth.signOut()
}

const Form = styled.form`
  align-content: center;
  overflow: hidden;
  min-width: 365px;
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: space-around;
`
const ThemeLabel = styled(Label)`
  align-self: center;
`
const ThemeSelect = styled(Select)`
  display: block;
  border-radius: 4px;
  border: var(--borderColor);
  background: var(--optionsBG);
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
`
