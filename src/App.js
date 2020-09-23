import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Pages/Packlist/PacklistPage'
import EventPage from './Pages/EventMain/EventPage'
import EditPacklistForm from './Pages/PacklistForm/EditPacklistForm'

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
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
