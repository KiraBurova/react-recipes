import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinkButton from '../blocks/LinkButton';

const RouterComponent: React.SFC = () => {
  return (
    <BrowserRouter>
      <AppBar position="static" color="default">
        <Toolbar>
          <LinkButton to="/">
            Recipes
          </LinkButton>
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={App} />
      <Route path="/recipes/:id" component={Recipe} />
    </BrowserRouter>
  );
}

export default RouterComponent;