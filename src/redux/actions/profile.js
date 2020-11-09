import { SET_PROFILE } from "./actionTypes";
import instance from "./instance";

export const fetchProfile = () => async (dispatch) => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    console.log(profile+" profile")
    dispatch({
      type: SET_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.error(error);
  }
};
