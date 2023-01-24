import axios from "axios";
import { FAIL_USER, LOAD_USER, SUCCESS_USER } from "../actionTypes/ActionTypes";

// get all the users

export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get("/api/user/all");
    dispatch({ type: SUCCESS_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

//add new user

export const addUser = (newUser) => async (dispatch) => {
  try {
    await axios.post("/api/user/add", newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

// delete one user 

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/delete/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//edit user
export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/edit/${id}`, newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

// get one user 

export const getOneUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const getUser = axios.get(`/api/user/get-one/${id}`);
    dispatch({ type: SUCCESS_USER, payload: getUser.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};
