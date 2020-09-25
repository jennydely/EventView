import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Pages/Packlist/PacklistPage'
import EventPage from './Pages/EventMain/EventPage'
import EventForm from './Pages/EventForm/EventForm'
import PacklistForm from './Pages/PacklistForm/PacklistForm'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/packlist/:packlistName?">
          <PacklistPage />
        </Route>
        <Route path="/packlistform/:packlistId?">
          <PacklistForm />
        </Route>
        <Route path="/eventform/:eventId?">
          <EventForm />
        </Route>
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
