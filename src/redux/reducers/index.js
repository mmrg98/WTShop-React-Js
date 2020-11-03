import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  cart: cartReducer,
});

export default rootReducer;
