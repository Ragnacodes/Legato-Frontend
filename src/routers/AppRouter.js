import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Pages/Dashboard';
import PageOne from '../components/Pages/PageOne';
import PageTwo from '../components/Pages/PageTwo';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/one" component={PageOne} />
        <PrivateRoute path="/two" component={PageTwo} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
);

export default AppRouter;
