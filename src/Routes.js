import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage"
import AboutMe from "./AboutMe";
import Connect from "./Connect"


function Routes() {
 
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/about">
          <AboutMe/>
        </Route>
        <Route exact path="/connect">
          <Connect/>
        </Route>
        {/* if route not found redirect to homepage */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
