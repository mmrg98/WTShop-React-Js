import { SET_ORDERS } from "../actions";

const initialState = {
  orders: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      const orders = payload;
      return {
        orders: orders,
      };
    default:
      return state;
  }
};

export default reducer;
