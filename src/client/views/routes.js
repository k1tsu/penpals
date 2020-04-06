import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Home } from '.';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route render={() => (<h2>test</h2>)} /> 
    </Switch>
  </Router>
); 

// the switch element catches all the routes that arent defined, so e.g. someone
// access /myprofile it i'll just render a <h2>text</h2>

export default Routes;
