import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="y-app">
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
