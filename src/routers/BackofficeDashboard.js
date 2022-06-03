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
  const paths = ["/home", "/about", "/skills", "/contact"]
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
        <div className='content__form animate__animated animate__fadeIn'>
            <Switch>
              { paths.map((path, i) => <Route key={i} exact path={path} component={FilesForm} />) }
              <Redirect to="/home" />
            </Switch>
        </div>
      </Router>
    </div>
  )
}
