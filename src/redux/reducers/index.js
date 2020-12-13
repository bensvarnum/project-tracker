import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";

const initialState = [
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
];

const tasks = (state = { tasks: initialState }, action) => {
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
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
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
