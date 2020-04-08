import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import Home from "./Home.jsx";
import NotFound from "./NotFound";
import { Sidebar } from "../components";
import { NavbarMobile } from "../components";
import { Grid } from "./styles";
import { connect } from "react-redux";

const Routes = ({ theme }) => (
  <Router>
    <Grid collapsed={theme.collapsed}>
      <BrowserView>
        <Sidebar />
      </BrowserView>
      <MobileView>
        <NavbarMobile />
      </MobileView>
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
