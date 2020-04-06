import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./Home.jsx";
import { Sidebar } from "../components";

const Routes = () => (
  <Router>
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route render={() => (<h2>test</h2>)} />
    </Switch>
  </Router>
);

export default Routes;
