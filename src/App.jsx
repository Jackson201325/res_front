import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
// import axios from "axios";

function App() {
  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/logged_in", { withCredentials: true })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

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
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// function mapState(state) {
//   const { alert } = state;
//   return { alert };
// }

// const actionCreators = {
//   clearAlerts: alertActions.clear,
// };

// const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };
