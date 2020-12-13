import React from "react";
import "./App.css";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import { editTask, createTask, removeTask } from "./redux/actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };

  return (
    <div className="app">
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onRemoveTask={onRemoveTask}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
