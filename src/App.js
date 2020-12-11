import React, { useContext } from 'react'

import UserProvider, { UserContext } from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import PacklistPage from './Pages/Packlist/PacklistPage'
import UserPage from './Pages/UserPage/UserPage'
import EventForm from './Pages/EventForm/EventForm'
import SettingsPage from './Pages/SettingsPage/SettingsPage'
import StartPage from './Pages/StartPage/StartPage'
import GuestPage from './Pages/GuestPage/GuestPage'
import PacklistForm from './Pages/PacklistForm/PacklistForm'


export default function App() {

  const user = useContext(UserContext);
  console.log('login status', user, !!user);
  return (
    <>
      <GlobalStyles userLoggedIn={user ? true : false} />
      <Router>
        <Switch>

          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/login">
            <StartPage />
          </Route>
          <Route path="/packlist/:packlistName?">
            <PacklistPage />
          </Route>
          <Route path="/packlistform/:packlistId?">
            <PacklistForm />
          </Route>
          <Route path="/eventform/:eventId?">
            <EventForm />
          </Route>
          <Route path="/userpage" >
            <UserPage />
          </Route>
          <Route path="/guestpage">
            <GuestPage />
          </Route>
          <Route path="*"><Redirect to="/" /></Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
