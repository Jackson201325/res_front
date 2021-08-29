import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import axios from "axios";

function App() {
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => <Home {...props} />}
          ></Route>
          <Route
            exact
            path={"/dashboard"}
            render={(props) => <Dashboard {...props} />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
