import React from "react";

function Nav(props) {
  console.log("nav", props.user);
  const onLogoutUser = (e) => {
    props.onLogoutUser(props.user);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fixed top
          </a>
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
