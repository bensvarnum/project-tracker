import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onCreateUser = (e) => {
    e.preventDefault();
    props.onCreateUser({ name, email, password });
    resetForm();
  };

  return (
    <div className="login">
      <form
        className="login__form needs-validation"
        novalidate
        onSubmit={onCreateUser}
      >
        <h1>Sign Up here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
        <div class="invalid-feedback">Please enter your name.</div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
        <div class="invalid-feedback">Please enter your email.</div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
        />
        <div class="invalid-feedback">Please enter a password.</div>
        <button type="submit" className="submit__btn">
          Submit
        </button>
        <button type="submit" className="submit__btn ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
