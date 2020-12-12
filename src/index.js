import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from "redux"
import UserProvider from "./providers/UserProvider";
import rootStore from "./reducers/rootStore.js"
import './index.css'
import App from './App'

import * as serviceWorker from './serviceWorker'
import { loadState, saveState } from './lib/reduxLocalStorage';

const persistedState = loadState();
const store = createStore(rootStore, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  console.log(store.getState());
  saveState(store.getState());
});
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
