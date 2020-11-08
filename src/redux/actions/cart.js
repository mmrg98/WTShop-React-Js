import { ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT } from "./actionTypes";
import instance from "./instance";

// export const addItemToCart = (item) => ({
//   type: ADD_PRODUCT,
//   payload: item,
// });

export const addItemToCart = (item) => async (dispatch) => {
  try {
    console.log("try to add");
    const res = await instance.post("orders/", item);
    const new_item = res.data;
    dispatch({
      type: ADD_PRODUCT,
      payload: new_item,
    });
  } catch (error) {
    console.error(error.response.data);
  }
};

export const removeItemFromCart = (item) => ({
  type: REMOVE_PRODUCT,
  payload: item,
});

export const checkoutCart = (cart) => ({
  type: CHECKOUT,
  payload: cart,
});
