import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../views/Home';
import LoginPage from '../views/LoginPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route render={() => (<h2>test</h2>)} />
    </Switch>
  </Router>
);

export default Routes;
