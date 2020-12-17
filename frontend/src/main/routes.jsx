import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";


import Dashboard from "../dashboard/dashboard";
import CicloDePagamentos from "../CicloDePagamentos/CicloDePagamentos";
import AuthOrApp from './authOrApp'

const Routes = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AuthOrApp}>
        <IndexRoute component={Dashboard} />
        <Route path="cicloDePagamentos" component={CicloDePagamentos} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  );
};

export default Routes;
