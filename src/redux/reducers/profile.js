import { SET_PROFILE, EDIT_PROFILE } from "../actions";

const initialState = {
  profile: {},
  user: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      const profile = payload;
      const user = profile.user;
      return {
        profile: profile,
        user: user,
      };

      case EDIT_PROFILE:
        
        return {
          ...state,
          profile: profile,
        };
    default:
      return state;
  }
};

export default reducer;
