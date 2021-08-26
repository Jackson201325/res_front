import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/dashboard"} component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
