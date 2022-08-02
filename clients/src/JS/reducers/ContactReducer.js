import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  SUCCESS_CONTACT,
} from "../actionTypes/ActionTypes";

const initialState = {
  contacts: [],
  load: false,
  errors: null,
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true };
    case SUCCESS_CONTACT:
      return { ...state, contacts: payload.contacts };
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload.errors };
    default:
      return state;
  }
};

export default contactReducer;
