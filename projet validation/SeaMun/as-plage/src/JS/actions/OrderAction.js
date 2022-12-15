import axios from "axios";
import {
  ADD_RECLAMATION,
  FAIL_RECLAMATION,
  LOAD_RECLAMATION,
  SUCCESS_RECLAMATION,
} from "../actionTypes/ActionTypes";
import { getOneEndroit } from "./EndroitAction";

//get all reclamation

// export const getReclamations = () => async (dispatch) => {
//   dispatch({ type: LOAD_RECLAMATION });
//   try {
//     let result = await axios.get("/api/order/get-all");
//     dispatch({ type: SUCCESS_RECLAMATION, payload: result.data });
//   } catch (error) {
//     dispatch({ type: FAIL_RECLAMATION, payload: error });
//   }
// };

// add reclamation

export const addOrder = (id, newReclamation) => async (dispatch) => {
  dispatch({ type: LOAD_RECLAMATION });
  try {
    await axios.post(`/api/order/add/${id}`, id, newReclamation);
    dispatch({
      type: SUCCESS_RECLAMATION,
      payload: { id, newReclamation },
    });
  } catch (error) {
    dispatch({ tyep: FAIL_RECLAMATION, payload: error.response });
  }
};
