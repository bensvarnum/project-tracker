import React, { useState } from "react";

const TASKS_STATUSES = ["unstarted", "In Progress", "Completed"];

const TaskPage = () => {
  const [cardForm, showcardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const formToggler = () => {
    showcardForm(!cardForm);
  };

  const renderTaskLists = () => {};

  return (
    <div>
      <div className="containter my-5">
        <div className="jumbotron py-3">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Project Tracker
            </h2>
          </div>
          {/* input form */}
          {cardForm && (
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task Title"
                  onChange={onChangeTitle}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Task Description"
                  onChange={onChangeDescription}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
