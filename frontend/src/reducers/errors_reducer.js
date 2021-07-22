import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";

const sessionError = combineReducers({
  sessionError: SessionErrorsReducer,
});

export default sessionError;
