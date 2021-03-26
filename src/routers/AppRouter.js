import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import DummyPage from '../components/DummyPage';
import LandingPage from "../components/LandingPage/LandingPage";
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
      <Route path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DummyPage} />
        <PrivateRoute path="/scenarios" component={DummyPage} />
        <PrivateRoute path="/connections" component={DummyPage} />
        <PrivateRoute path="/webhooks" component={DummyPage} />
        <PrivateRoute path="/keys" component={DummyPage} />
        <PrivateRoute path="/profile" component={DummyPage} />
        <PrivateRoute path="/logout" component={DummyPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
);

export default AppRouter;
