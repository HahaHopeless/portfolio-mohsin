import { combineReducers } from "redux";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({ languageReducer });

export default rootReducer;
