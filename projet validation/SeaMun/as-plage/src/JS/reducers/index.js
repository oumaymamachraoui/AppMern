import { combineReducers } from "redux";
import { EndroitReducer } from "./EndroitReducer";
import docs from "./DocumentReducer";
import { ReclamationReducer } from "./ReclamationReducer";
import { userReducer } from "./userReducer";
import { OrderReducer } from "./OrderReducer";
const rootReducer = combineReducers({
  EndroitReducer,
  docs,
  userReducer,
  ReclamationReducer,
  OrderReducer,
});
export default rootReducer;
