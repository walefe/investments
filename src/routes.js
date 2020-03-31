import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
