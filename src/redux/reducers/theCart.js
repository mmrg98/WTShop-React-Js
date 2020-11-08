import { SET_CART, ADD_PRODUCT, CHECKOUT } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      console.log("red", payload);
      state = payload;
      return state;

    case ADD_PRODUCT:
      return state;

    case CHECKOUT:
      state = [];
      return state;

    default:
      return state;
  }
};

export default reducer;
