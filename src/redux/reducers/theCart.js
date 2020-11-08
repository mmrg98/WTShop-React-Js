import { SET_CART, ADD_PRODUCT, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      console.log("red", payload);
      const cart = payload.theItems;
      const total = payload.total;
      return {
        ...state,
        cart: cart,
        total: total,
      };

    case ADD_PRODUCT:
      const newItem = payload;
      return {
        ...state,
        cart: [...cart, newItem],
      };

    case CHECKOUT:
      state = initialState;
      return state;

    default:
      return state;
  }
};

export default reducer;
