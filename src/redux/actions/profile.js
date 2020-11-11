import { SET_PROFILE, EDIT_PROFILE } from "./actionTypes";
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

export const editProfile = (updatedProfile) => async (dispatch) => {
  try {
    const res = await instance.post("/profile/edit/", updatedProfile);
    const profile = res.data;
    dispatch({
      type: EDIT_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.error(error)
  }
};