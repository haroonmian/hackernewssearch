import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Redirect
} from "react-router-dom";
import Search from "./pages/search";
import History from "./pages/history";
import Header from "./components/header"
import Loader from "./components/loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <Router>
        <Switch>
          <Route path={"/"} exact={true} render={() => <Redirect to={"/search"} />} />
          <Route path={"/search"} exact={true} name="search" component={Search} />
          <Route path={"/history"} exact={true} name="home" component={History}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
