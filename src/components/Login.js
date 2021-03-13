import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setTitle("");
  };

  const onCreateUser = (e) => {
    e.preventDefault();
    props.onCreateUser({ name, email, password });
    props.onCreateProject({ title });
    resetForm();
  };

  return (
    <div className="login">
      {/* <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">On Track</h1>
          <p className="lead">On Track is a simple to use project tracker.</p>
          <p>
            Although it is simple to use, the focus is kept on the progress of
            the project.
          </p>
          <p>
            Use this tool to break down bigger tasks into smaller, much easier
            to handle tasks.
          </p>
        </div>
      </div> */}
      <form
        className="login__form needs-validation"
        formNoValidate
        onSubmit={onCreateUser}
      >
        <h1>Let's Get Started</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
        <div className="invalid-feedback">Please enter your name.</div>
        <input
          type="text"
          placeholder="Project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        />
        <div className="invalid-feedback">Please enter a project name.</div>
        <button type="submit" className="submit__btn">
          Check-in
        </button>
      </form>
    </div>
  );
};

export default Login;
