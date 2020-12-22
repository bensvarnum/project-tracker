import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";

const initialState = {
  tasks: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
}
