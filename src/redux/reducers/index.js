import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";
import ordersReducer from "./orders";
import theCartReducer from "./theCart";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  ordersReducer,
  theCart: theCartReducer,
});

export default rootReducer;
