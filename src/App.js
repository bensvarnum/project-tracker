import React from "react";
import "./App.css";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";

function App(props) {
  return (
    <div className="app">
      <TasksPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
