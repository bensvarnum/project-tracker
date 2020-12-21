import { CREATE_PROJECT } from "../actions/types";

const initialState = {
  projects: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  //   const { payload } = action;
  switch (action.type) {
    case CREATE_PROJECT: {
      return {
        ...state,
        projects: state.projects.concat(action.payload),
      };
    }

    default:
      return state;
  }
}
