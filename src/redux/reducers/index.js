import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";

import profile from "./profile";

import ordersReducer from "./orders";
import theCartReducer from "./theCart";


const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  profile,
  ordersReducer,
  theCart: theCartReducer,

});

export default rootReducer;
