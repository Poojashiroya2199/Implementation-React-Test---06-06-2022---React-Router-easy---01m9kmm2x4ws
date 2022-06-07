import React from "react";
import { Home } from "./Pages/Home";

import { Route, Switch } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Index } from "./Pages/Index";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={Index} />
      <Route path="/notfound" exact component={NotFound} />
    </Switch>
  );
};
