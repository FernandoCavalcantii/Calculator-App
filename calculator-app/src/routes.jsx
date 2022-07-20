import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import Login from './Pages/Login';
import Calculator from './Pages/Calculator';
import LoginProvider from './Context/Login/LoginProvider';
import CalculationProvider from './Context/Calculator/CalculationProvider';

const Routes = () => (
  <Switch>
    <LoginProvider>
      <Route exact path="/" component={ Login }/>
      <CalculationProvider>
        <Route exact path="/calculator" component={ Calculator }/>
      </CalculationProvider>
    </LoginProvider>
  </Switch>
);

export default Routes;
