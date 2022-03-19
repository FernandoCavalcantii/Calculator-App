import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import Login from './Pages/Login';
import Calculator from './Pages/Calculator';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login }/>
    <Route exact path="/calculator" component={ Calculator }/>
  </Switch>
);

export default Routes;
