import { SET_CART, ADD_PRODUCT, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      console.log("red", payload);
      const cart = payload.items;
      const total = payload.total;
      return {
        ...state,
        cart: cart,
        total: total,
      };

    case ADD_PRODUCT:
      return state;

    case CHECKOUT:
      state = initialState;
      return state;

    default:
      return state;
  }
};

export default reducer;
