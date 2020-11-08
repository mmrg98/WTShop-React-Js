import { SET_PROFILE} from "../actions";


const initialState = {
    profile: {},
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_PROFILE:
        const profile = payload;
        return {
            profile: profile,
        };
        default:
      return state;
  }
};

export default reducer;