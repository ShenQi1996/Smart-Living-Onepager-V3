import { combineReducers } from "redux";
import sessionAPIReducer from "./session_api_reducer";
import uiReducer from "./ui_reducer";
import sessionError from "./errors_reducer";

const RootReducer = combineReducers({
  session: sessionAPIReducer,
  ui: uiReducer,
  sessionError: sessionError,
});

export default RootReducer;
