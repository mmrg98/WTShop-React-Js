import {
  SET_CART,
  ADD_PRODUCT,
  CHECKOUT,
  SET_CURRENT_USER,
} from "../actions/actionTypes";

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

     // const newItem = payload;
      // return {
      //   ...state,
      //   cart: [...cart, newItem],
      // };
      return state;

    case SET_CURRENT_USER:
      if (!payload) return initialState;


    case CHECKOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
