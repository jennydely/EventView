import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Packlist/PacklistPage'
import EventPage from './EventPage'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/packlist/:packlistName?">
          <PacklistPage />
        </Route>
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
