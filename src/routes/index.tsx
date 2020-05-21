import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DashMobile from '../pages/DashMobile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/dashmobile" exact component={DashMobile} />
  </Switch>
);

export default Routes;
