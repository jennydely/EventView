import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const middlewares = [thunk];

export default createStore(rootReducer,composeWithDevTools(), applyMiddleware(...middlewares));
