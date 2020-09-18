import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Packlist/PacklistPage'
import EventPage from './EventPage'
import EditPacklistForm from './Packlist/EditPacklistForm'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/packlist/:packlistName?">
          <PacklistPage />
        </Route>
        <Route path="/editpacklist/:editPacklistID?">
          <EditPacklistForm />
        </Route>
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
