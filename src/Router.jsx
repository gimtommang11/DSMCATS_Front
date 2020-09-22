import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Router = () => (
  <Switch>
    <Route exact path="/" component={<div>DMSCATS</div>} />
  </Switch>
);
