import decode from "jwt-decode";
import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";
import Cookies from "js-cookie";

import { fetchCart, fetchOrders, fetchProfile } from "./index";

export const login = (userData, history) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("login/", userData);

      const { access } = response.data;
      dispatch(setCurrentUser(access));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("signup/", userData);

      const { token } = response.data;
      dispatch(setCurrentUser(token));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => setCurrentUser();

// FUCTION related to the authenticstion
const setAuthToken = (token) => {
  if (token) {
    Cookies.set("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    Cookies.remove("token");
  }
};

export const setCurrentUser = (token) => {
  setAuthToken(token);
  const user = token ? decode(token) : null;
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    });
    dispatch(fetchOrders());
    dispatch(fetchCart());
    dispatch(fetchProfile());
  };
};
export const checkForExpiredToken = () => {
  const token = Cookies.get("token");
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    const user = decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return setCurrentUser();
};
