import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import UserProvider from "./providers/UserProvider";
import './index.css'
import App from './App'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
  ,
  document.getElementById('root')
)

serviceWorker.unregister()
