import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import { Sidebar } from "../components";
import { Grid } from "./styles";
import { connect } from "react-redux";

const Routes = ({ theme }) => (
  <Router>
    <Grid collapsed={theme.collapsed}>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Grid>
  </Router>
);

export default connect(state => ({
  theme: state.theme
}))(Routes);
