
import { ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT} from "./actionTypes";

export const addItemToCart = (item) => ({
  type: ADD_PRODUCT,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_PRODUCT,
  payload: item,
});

export const checkoutCart = (cart) => ({
  type: CHECKOUT,
  payload: cart,
});

