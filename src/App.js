import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './PackListPage'
import EventPage from './EventPage'
export default function App() {

  return (
    <Router>
         <Route path="/packlist">
        <PacklistPage />
      </Route>
      <Switch>
        <Route exact path="/">
          <EventPage /> 
        </Route>
        </Switch>
       </Router>
  );
}


