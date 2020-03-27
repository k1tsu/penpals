import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import CurrentLetter from './CurrentLetter';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/:letterId">
        <CurrentLetter />
      </Route>
      <Route render={() => (<h2>test</h2>)} /> 
    </Switch>
  </Router>
);

export default Routes;
