import { FAIL_USER, LOAD_USER, SUCCESS_USER } from "../actionTypes/ActionTypes";

const initialState = {
  users: [],
  load: false,
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state };
    case SUCCESS_USER:
      return { ...state, load: false, users: payload.users };
    case FAIL_USER:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default userReducer;
