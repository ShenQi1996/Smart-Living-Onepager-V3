import { combineReducers } from "redux";
import session from "./session_reducer";
import uiReducer from "./ui_reducer";
import sessionError from "./errors_reducer";

const RootReducer = combineReducers({
  session: session,
  ui: uiReducer,
  sessionError: sessionError,
});

export default RootReducer;
