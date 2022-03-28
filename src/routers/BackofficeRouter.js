import React from "react";
import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AuthForm from "../backoffice/AuthForm";
import { BackofficeDashboard } from "./BackofficeDashboard";

export const BackofficeRouter = () => {
  const { logged: isLogged } = useSelector( state => state.auth );
  return (
    <div className="backoffice">
      <Router basename="/portfolio/backoffice">
        <Switch>
          {isLogged
            ?
            (
              <>
                <Route path="/" component={BackofficeDashboard} />
              </>
            )
            :
            (
              <>
                <Route exact path="/auth" component={AuthForm} />
                <Route path="/register" component={AuthForm} />
                <Redirect to="/auth" />
              </>
            )
          }
        </Switch>
      </Router>
    </div>
  );
};
