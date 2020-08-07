import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage"
import AboutMe from "./AboutMe";


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
        {/* if route not found redirect to homepage */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
