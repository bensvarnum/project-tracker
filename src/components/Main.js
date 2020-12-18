import React from "react";
import "../App.css";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./TasksPage";
import { editTask, createTask, removeTask, loginUser } from "../redux/actions";
import Login from "./Login";

function Main(props) {
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

  return (
    <div className="app">
      <Login onCreateUser={onCreateUser} />
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onRemoveTask={onRemoveTask}
        user={props.user}
      />
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
