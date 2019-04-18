import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../App'
import Recipe from './Recipe'

const RouterComponent: React.SFC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/recipes/:id" component={Recipe} />
    </BrowserRouter>
  );
}

export default RouterComponent;