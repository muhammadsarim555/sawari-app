import { combineReducers } from "redux";
import authReducer from "./reducer/authReducer";

export default (rootReducer = combineReducers({
  authReducer
}));
