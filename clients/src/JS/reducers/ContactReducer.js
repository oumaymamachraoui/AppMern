import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  SUCCESS_CONTACT,
} from "../actionTypes/ActionTypes";

const initialState = {
  contacts: [],
  load: false,
  errors: [],
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state }
    case SUCCESS_CONTACT:
      return { ...state, load: false, contacts: payload.contacts }
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default contactReducer;
