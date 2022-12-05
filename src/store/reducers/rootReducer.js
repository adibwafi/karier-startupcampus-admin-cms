import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import applicationReducer from "./applicationReducer";

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  applicationReducer: applicationReducer
});

export default rootReducer;
