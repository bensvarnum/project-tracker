import React from "react";
import "../App.css";
import { connect, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./TasksPage";
import {
  editTask,
  createTask,
  removeTask,
  loginUser,
  logoutUser,
} from "../redux/actions";
import Login from "./Login";
import Nav from "./Nav";
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

  const onLogoutUser = (id) => {
    props.dispatch(logoutUser(id));
  };

  return (
    <div className="app">
      <div>
        <Nav user={props.user} onLogoutUser={onLogoutUser} />
      </div>
      <br />
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
