import { combineReducers } from "redux";
import replaysReducer from "./replaysReducer";

export default combineReducers({
  replays: replaysReducer
});
