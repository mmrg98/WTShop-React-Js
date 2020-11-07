import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT } from "./actionTypes";
import instance from "./instance";

export const addItemToCart = (item) => ({
  type: ADD_PRODUCT,
  payload: item,
});

export const fetchCart = () => async (dispatch) => {
  try {
    const res = await instance.get("cart/");
    const cart = res.data;
    console.log(cart);
    dispatch({
      type: SET_CART,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};

// export const addItemToCart = (item) => async (dispatch) => {
//   try {
//     console.log("try to add");
//     const res = await instance.post("orders/", item);
//     const new_item = res.data;
//     dispatch({
//       type: ADD_PRODUCT,
//       payload: new_item,
//     });
//   } catch (error) {
//     console.error(error.response.data);
//   }
// };

export const removeItemFromCart = (item) => ({
  type: REMOVE_PRODUCT,
  payload: item,
});

export const checkoutCart = (cart) => ({
  type: CHECKOUT,
  payload: cart,
});
