import { SET_ORDERS } from "./actionTypes";
import instance from "./instance";
export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("history/");
    const cart = res.data;
    console.log(cart);
    dispatch({
      type: SET_ORDERS,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};
