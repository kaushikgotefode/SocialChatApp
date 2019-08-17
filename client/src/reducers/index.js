import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});
