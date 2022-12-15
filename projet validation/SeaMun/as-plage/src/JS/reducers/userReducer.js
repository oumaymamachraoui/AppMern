import {  FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT, REGISTER_USER } from "../actionTypes/ActionTypes";


const initialState = {
  user: {},
  loadUser: false,
  errors: [],
  isAuth: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.newUser, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { loadUser: false, isAuth: false, user: {}, errors: [] };
    case FAIL_USER:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

