import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import App from "./app";
import Dashboard from "../dashboard/dashboard";
import CicloDePagamentos from "../CicloDePagamentos/CicloDePagamentos";

const Routes = (props) => {
  return (
    <Router history={hashHistory}>
      {/* <Route path="/" component={App}> */}
      <Route path="/" component={Dashboard} />
      <Route path="cicloDePagamentos" component={CicloDePagamentos} />
      {/* </Route> */}
      <Redirect from="*" to="/" />
    </Router>
  );
};

export default Routes;
