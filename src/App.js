import "./App.css";
import { Login } from "./components/login/login";
import { SignUp } from "./components/signup/signup";
import history from "./components/common/history";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Switch>
        <Route exact path="/" component={(props) => <Login history={history} />} />
        <Route path="/s" component={(props) => <SignUp history={history} />} />
      </Switch>
    </Router>
  );
}

export default App;
