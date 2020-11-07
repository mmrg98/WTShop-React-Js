import { SET_CART } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      return payload;

    default:
      return state;
  }
};

export default reducer;
