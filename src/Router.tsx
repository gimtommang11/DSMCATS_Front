import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { MainFeed } from "./components/index";

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={MainFeed} />
  </Switch>
);

export default Router;
