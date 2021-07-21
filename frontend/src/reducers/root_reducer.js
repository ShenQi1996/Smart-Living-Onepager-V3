import { combineReducers } from "redux";
import session from "./session_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
  session: session,
  ui: uiReducer,
});

export default RootReducer;
