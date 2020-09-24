import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalStyles from './GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
