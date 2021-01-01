import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './Pages/Index';
import Register from './Pages/Register';
import Login from './Pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;