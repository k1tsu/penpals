import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import { Sidebar } from "../components";

const Routes = () => (
  <Router>
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
