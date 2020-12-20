import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="y-app">
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/checking" component={Checking} />
          <Route exact path="/savings" component={Savings} /> */}
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
