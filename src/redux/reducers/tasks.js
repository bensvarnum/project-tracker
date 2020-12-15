import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "create-react-app",
      description: "npx create-react-app",
      status: "Completed",
    },
    {
      id: 2,
      title: "import redux",
      description: "npm redux react-redux",
      status: "In Progress",
    },
    {
      id: 3,
      title: "create redux store",
      description: "wrap app component in provider",
      status: "In Progress",
    },
    {
      id: 4,
      title: "create a back-end",
      description: "setup a database",
      status: "Unstarted",
    },
  ],
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
