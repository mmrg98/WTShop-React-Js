import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
});

export default rootReducer;
