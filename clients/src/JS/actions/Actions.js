import axios from "axios";
import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  SUCCESS_CONTACT,
} from "../actionTypes/ActionTypes";

export const getContact = () => async (dispatch) => {
  dispatch({ type:LOAD_CONTACT });
  try {
    let result = axios.get("/api/contact/all");
    dispatch({ type: SUCCESS_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

//add  contact

export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/conatct/add", newContact);
    dispatch(getContact());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/delete/${id}`);
    dispatch(getContact());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/edit/${id}`, newContact);
    dispatch(getContact());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type:LOAD_CONTACT });
  try {
    const getContact = axios.get(`/api/contact/get-one/${id}`);
    dispatch({ type: SUCCESS_CONTACT, payload: getContact.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
