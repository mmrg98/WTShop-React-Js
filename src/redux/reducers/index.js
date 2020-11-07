import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";
import cartReducer from "./cart";
import theCartReducer from "./theCart";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  cart: cartReducer,
  theCart: theCartReducer,
});

export default rootReducer;
