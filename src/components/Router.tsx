import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../App'
import Recipe from './Recipe'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const RouterComponent: React.SFC = () => {
  return (
    <BrowserRouter>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Recipes
          </Typography>
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={App} />
      <Route path="/recipes/:id" component={Recipe} />
    </BrowserRouter>
  );
}

export default RouterComponent;