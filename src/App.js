import React from "react";
// import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";


import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <main>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </main> */}
      <Main />
      
    </div>
  );
}

export default App;
