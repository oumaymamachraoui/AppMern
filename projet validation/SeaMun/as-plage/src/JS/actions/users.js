import axios from "axios";
import {
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
} from "../actionTypes/ActionTypes";

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};


export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
