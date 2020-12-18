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
      <form className="login__form" onSubmit={onCreateUser}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
        <button type="submit" className="submit__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
