import { SET_CART, ADD_PRODUCT, CHECKOUT } from "./actionTypes";
import instance from "./instance";

// export const addItemToCart = (item) => ({
//   type: ADD_PRODUCT,
//   payload: item,
// });

export const fetchCart = () => async (dispatch) => {
  try {
    const res = await instance.get("cart/");
    const cart = res.data;
    console.log("cart", cart);
    dispatch({
      type: SET_CART,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addItemToCart = (item) => async (dispatch) => {
  try {
    console.log("try to add");
    const res = await instance.post("orders/", item);
    const cart = res.data;
    // dispatch({
    //   type: ADD_PRODUCT,
    //   payload: new_item,
    // });
    dispatch({
      type: SET_CART,
      payload: cart,
    });
  } catch (error) {
    console.error("no adding"); //error.response.data
  }
};

export const removeItemFromCart = (item) => async (dispatch) => {
  try {
    console.log("try to remove");
    const res = await instance.post("remove/item/", item);
    const cart = res.data;
    dispatch({
      type: SET_CART,
      payload: cart,
    });
  } catch (error) {
    console.error("no adding"); //error.response.data
  }
};

export const checkoutCart = () => async (dispatch) => {
  try {
    console.log("try to checkout");
    const res = await instance.post("checkout/");
    //const item = res.data;
    dispatch({
      type: CHECKOUT,
    });
  } catch (error) {
    console.error("no checkout"); //error.response.data
  }
};

//checkout CHECKOUT
