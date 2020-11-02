import { SET_PRODUCTS} from "../actions";


const initialState = {
    products: [],
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_PRODUCTS:
        const products = payload;
        return {
            products: products,
        };
        default:
      return state;
  }
};

export default reducer;