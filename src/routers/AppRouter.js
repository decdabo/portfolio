import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { DashboardRouter } from "./DashboardRouter";
import { BackofficeRouter } from "./BackofficeRouter";
import { NavAppRouter } from "../components/nav/NavAppRouter";
import windowAnimatior from "../helpers/windowAnimator";
import "../styles/Styles.scss";

export const AppRouter = () => {
  const [ window, setWindow ] = useState("");
  const [ line, setLine ] = useState("");

  return (
    <div className="body">
      <Router basename="/portfolio">
        <NavAppRouter fncWindow={setWindow} fncLine={setLine} animator={windowAnimatior} />
        <Switch>
          <Route path="/backoffice" component={BackofficeRouter} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </Router>
      <div className={`global__window ${window}`}>
        <div className={`global__line ${line}`}/>
      </div>
    </div>
  );
};
