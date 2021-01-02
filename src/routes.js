import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './Pages/Index';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Panel from './Pages/Panel';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/panel" component={Panel} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;