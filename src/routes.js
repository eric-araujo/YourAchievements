import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './Pages/Index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index}></Route>
    </BrowserRouter>
  );
};

export default Routes;
