import { combineReducers } from "redux";
import userReducer from "./user";
import productsReducer from "./products";
import cartReducer from "./products";

const rootReducer = combineReducers({
  user: userReducer,
  productsReducer,
  cartReducer,
});

export default rootReducer;
