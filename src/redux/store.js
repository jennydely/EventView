import { applyMiddleware, createStore } from "redux"
import rootStore from "./reducers/rootStore.js"
import thunk from 'redux-thunk';
const middlewares = [thunk];

const store = createStore(rootStore, applyMiddleware(...middlewares))

export default store