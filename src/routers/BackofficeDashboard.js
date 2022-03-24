import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { BackofficeNav } from '../backoffice/BackofficeNav';
import { FilesForm } from '../backoffice/FilesForm';

export const BackofficeDashboard = ({ location: { pathname } }) => {
  return (
    <div className='backoffice__content'>
      <Router basename='/portfolio/backoffice'>
        <BackofficeNav active={ pathname } />
        <div className='content__form'>
            <Switch>
              <Route exact path="/home" component={FilesForm} />
              <Route exact path="/about" component={FilesForm} />
              <Route exact path="/skills" component={FilesForm} />
              <Route exact path="/contact" component={FilesForm} />
              <Redirect to="/home" />
            </Switch>
        </div>
      </Router>
    </div>
  )
}
