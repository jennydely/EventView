import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import UserProvider from "./providers/UserProvider";
import eventviewStore from "./reducers/eventviewStore.js"
import './index.css'
import App from './App'

import * as serviceWorker from './serviceWorker'

const mockEvents = require('./mockDB/events.json')
const events = createStore(eventviewStore, mockEvents)

ReactDOM.render(
  <Provider store={events}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
  ,
  document.getElementById('root')
)

serviceWorker.unregister()
