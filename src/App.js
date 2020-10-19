import React from 'react'
import * as firebase from "firebase/app"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PacklistPage from './Pages/Packlist/PacklistPage'
import EventPage from './Pages/EventMain/EventPage'
import EventForm from './Pages/EventForm/EventForm'
import SettingsPage from './Pages/SettingsPage/SettingsPage.js'
import LoginPage from './Pages/LoginPage/LoginPage.js'
import PacklistForm from './Pages/PacklistForm/PacklistForm'


export default function App() {

     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXt-OPqpTDbbo2XPE_59B5hW-8A0_6Ry0",
  authDomain: "eventview-c7f4e.firebaseapp.com",
  databaseURL: "https://eventview-c7f4e.firebaseio.com",
  projectId: "eventview-c7f4e",
  storageBucket: "eventview-c7f4e.appspot.com",
  messagingSenderId: "508244672720",
  appId: "1:508244672720:web:c1a9afcf69a0a6923bded5",
  measurementId: "G-QP9DFPK8QH"
};
   firebase.initializeApp(firebaseConfig);
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      console.log('NurFabiIsstmawieder')
    } else {
      // User is signed out.
      console.log('KeinEssenFürDely')
    }
  });

  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
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
        <Route path="/">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  )
}
