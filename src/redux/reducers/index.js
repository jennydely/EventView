import { combineReducers } from "redux";
import eventFilter from "./eventFilter";
import events from "./events";
import packlists from "./packlists"

export default combineReducers({ events, packlists, eventFilter });
