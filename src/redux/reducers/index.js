import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";
import cartReducer from "./cart";
import profile from "./profile";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  cart: cartReducer,
  profile,
});

export default rootReducer;
