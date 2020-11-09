import "./App.css";
import { Login } from "./components/login/login";
import { SignUp } from "./components/signup/signup";
import { LoggedIn } from "./components/loggedin/logged";
import history from "./components/common/history";
import { Router, Route, Switch } from "react-router-dom";
import React from "react";

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Switch>
        <Route exact path="/" component={(props) => <Login history={history} />} />
        <Route path="/s" component={(props) => <SignUp history={history} />} />
        <Route path="/in" component={(props) => <LoggedIn history={history} />} />
      </Switch>
    </Router>
  );
}

export default App;
