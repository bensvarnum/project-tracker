import React from "react";
import "../App.css";
import { connect, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./TasksPage";
import { editTask, createTask, removeTask, loginUser } from "../redux/actions";
import Login from "./Login";
import { selectUser } from "../redux/reducers/user";

function Main(props) {
  const user = useSelector(selectUser);

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };

  const onCreateUser = ({ name, email, password }) => {
    props.dispatch(loginUser({ name, email, password }));
  };
  console.log("a", props.user);
  console.log("b", props.user.user);
  console.log("c", user);
  return (
    <div className="app">
      {user ? (
        <TasksPage
          tasks={props.tasks}
          onStatusChange={onStatusChange}
          onCreateTask={onCreateTask}
          onRemoveTask={onRemoveTask}
          user={props.user}
        />
      ) : (
        <Login onCreateUser={onCreateUser} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Main);
