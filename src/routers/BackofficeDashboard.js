import React from 'react';
import { useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { BackofficeNav } from '../backoffice/BackofficeNav';
import { FilesForm } from '../backoffice/FilesForm';
import { logout } from '../reducers/actions/auth';

export const BackofficeDashboard = ({ location: { pathname } }) => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    return dispatch(logout());
  }
  return (
    <div className='backoffice__content'>
      <Router basename='/portfolio/backoffice'>
        <BackofficeNav active={ pathname } />
        <button className='content__logout-button' onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          Log Out
        </button>
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
