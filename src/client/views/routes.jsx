import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import Home from "./Home.jsx";
import NotFound from "./NotFound";
import { Sidebar } from "../components";
import { NavbarMobile } from "../components";
import { Grid } from "./styles";
import { connect } from "react-redux";
import { LetterView } from "../components";

const Routes = ({ theme }) => (
  <Router>
    <Grid theme={theme}>
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
        <Route path="/:id">
          <LetterView />
        </Route>
      </Switch>
    </Grid>
  </Router>
);

export default connect(state => ({
  theme: state.theme
}))(Routes);
