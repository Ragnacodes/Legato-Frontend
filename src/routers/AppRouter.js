import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../components/Layout/NotFoundPage';
import DummyPage from '../components/Layout/DummyPage';
import LandingPage from '../components/LandingPage/LandingPage';
import SketchpadPage from '../components/Sketchpad/SketchpadPage';
import Dashboard from '../components/Dashboard/Dashboard';
import ScenariosPage from '../components/Scenarios/ScenariosPage';
import Webhooks from '../components/Webhooks/Webhooks';
import ConnectionsPage from '../components/Connections/ConnectionsPage';
import Redirect from '../components/Connections/Redirect';
import HistoryPage from '../components/History/HistoryPage';
import LogPage from '../components/Log/LogPage';
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/scenarios" component={ScenariosPage} exact={true} />
        <PrivateRoute path="/scenarios/:id/sketchpad" component={SketchpadPage} />
        <PrivateRoute path="/scenarios/:id/history" component={HistoryPage} exact={true} />
        <PrivateRoute path="/scenarios/:id/history/:logID" component={LogPage} />
        <PrivateRoute path="/connections" component={ConnectionsPage} />
        <PrivateRoute path="/redirect" component={Redirect} exact={false}/>
        <PrivateRoute path="/webhooks" component={Webhooks} />
        <PrivateRoute path="/keys" component={DummyPage} />
        <PrivateRoute path="/profile" component={DummyPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
);

export default AppRouter;
