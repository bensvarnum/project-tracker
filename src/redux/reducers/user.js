import { LOGIN_USER } from "../actions/types";
import { LOGOUT_USER } from "../actions/types";

const initialState = {
  user: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  // const { payload } = action;
  switch (action.type) {
    case LOGIN_USER: {
      return (state.user = action.payload);
    }

    case LOGOUT_USER: {
      return (state.user = null);
    }

    default:
      return state;
  }
}
