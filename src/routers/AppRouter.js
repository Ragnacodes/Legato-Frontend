import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import LandingPage from "../components/LandingPage/LandingPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
