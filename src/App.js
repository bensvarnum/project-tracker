import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="y-app">
      <header>
        <Link to="/">Home</Link>
        {/* <div className="navs">
          <Link to="/checking">Checking</Link>
          <Link to="/savings">Savings</Link>
        </div> */}
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/checking" component={Checking} />
          <Route exact path="/savings" component={Savings} /> */}
        </Switch>
      </main>

      <footer>This the footer</footer>
    </div>
  );
}

export default App;
