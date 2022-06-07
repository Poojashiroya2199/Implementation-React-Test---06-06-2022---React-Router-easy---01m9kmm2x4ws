import React from "react";
import { Home } from "./Pages/Home";

import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Index } from "./Pages/Index";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/notfound" component={NotFound} />
      <Route path="/" exact component={Index} />
      <Redirect to="/" />
    </Switch>
  );
};
