import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {
  LoginPage,
  DashboardPage,
  AdminProfilePage,
  PropertiesPage,
  MessagesPage,
  TenantsProfilePage,
  CreatePropertiesPage,
  CreateTenantsPage,
  NotFoundPage
} from "../components";

const history = createHistory();

const AppRouter = (props) => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/admin" component={AdminProfilePage} />
        <PrivateRoute path="/properties" component={PropertiesPage} />
        <PrivateRoute path="/messages" component={MessagesPage} />
        <PrivateRoute path="/:tenantid" component={TenantsProfilePage} />
        <PrivateRoute
          path="/create/properties"
          component={CreatePropertiesPage}
        />
        <PrivateRoute path="/create/tenants" component={CreateTenantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default, history };
