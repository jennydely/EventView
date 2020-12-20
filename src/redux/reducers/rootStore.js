import { combineReducers } from "redux"
import eventviewStore from "./eventviewStore"
import packlistStore from "./packlistStore"

const rootStore = combineReducers({
    events: eventviewStore,
    packlists: packlistStore
  })
  
  export default rootStore