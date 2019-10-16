import { combineReducers } from "redux";
import auth from "./auth";
import pinga from "./pinga";

export default combineReducers({ auth, pinga });
