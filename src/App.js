import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Pages/Packlist/PacklistPage'
import EventPage from './Pages/EventMain/EventPage'
import EditPacklistForm from './Pages/PacklistForm/EditPacklistForm'
import EventForm from './Pages/EventForm/EventForm'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/packlist/:packlistName?">
          <PacklistPage />
        </Route>
        <Route path="/editpacklist/:packlistId?">
          <EditPacklistForm />
        </Route>
        <Route path="/createevent">
          <EventForm />
        </Route>
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
