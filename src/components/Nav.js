import React from "react";
import logo from "../img/on-track-logo.png";

function Nav(props) {
  const onLogoutUser = (e) => {
    props.onLogoutUser(props.user);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-primary">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src={logo}
            alt="logo"
            style={{ width: "75px", height: "75px" }}
          />

          <button className="btn btn-success m-3" onClick={onLogoutUser}>
            Logout
          </button>
        </div>
      </nav>
      <br />
    </div>
  );
}

export default Nav;
