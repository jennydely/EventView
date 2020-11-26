import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import eventviewStore from "./reducers/eventviewStore.js"
import rootStore from "./reducers/rootStore.js"
import './index.css'
import App from './App'
import GlobalStyles from './GlobalStyles'
import * as serviceWorker from './serviceWorker'

const mockEvents = require('./mockDB/events.json')
const events = createStore(eventviewStore, mockEvents)

const mockPacklists = require('./mockDB/packlists.json')
const myrootStore = createStore(rootStore, {events: mockEvents, packlists: mockPacklists})

console.log(myrootStore.getState());

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={events}>
    <App />
    </Provider>
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
