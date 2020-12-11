const initialState = [
  {
    id: 1,
    title: "create-react-app",
    description: "npx create-react-app",
    status: "In Progress",
  },
  {
    id: 2,
    title: "import redux",
    description: "npm redux react-redux",
    status: "In Progress",
  },
];

const tasks = (state = { tasks: initialState }, action) => {
  return state;
};

export default tasks;
