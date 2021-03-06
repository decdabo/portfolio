import React, { useEffect, useReducer, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { DashboardRouter } from "./DashboardRouter";
import { BackofficeRouter } from "./BackofficeRouter";
import { NavAppRouter } from "../components/nav/NavAppRouter";
import { initialState, navReducer } from "../reducers/actions/nav";
import { globalWindowAnimatior } from "../helpers/windowAnimator";
import "../styles/Styles.scss";

export const AppRouter = () => {
  const alert = useSelector(state => state.alert )
  const [ classState, setClassState ] = useState('')
  const [ windowState, setWindowState ] = useReducer(navReducer, initialState)  
  const { display, line, window } = windowState;

  const handleCloseAlert = () => {
    setClassState('');
  }

  useEffect(() => {
    alert.show ? setClassState('activate_alert') : setClassState('');

    setTimeout(() => {
      setClassState('');
    }, [2000])
  }, [alert]);

  return (
    <div className="body">
      <div className={`body__alert ${classState}`}>
        <div>
          {alert.error 
            ? (<i className="fa-solid fa-triangle-exclamation"></i>)
            : (<i class="fa-solid fa-check-double"></i>)
          }
          <i onClick={handleCloseAlert} className="fa-solid fa-xmark"></i>
        </div>
        <h4>{alert.error ? 'Error' : 'Success'}</h4>
        <p>{alert.msg}</p>
      </div>
      <Router basename="/portfolio">
        <NavAppRouter setWindowState={setWindowState} animator={globalWindowAnimatior} />
        <Switch>
          <Route path="/backoffice" component={BackofficeRouter} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </Router>
      <div className={`global__window ${ window && "closeWindow" }`} style={{display: `${ display ? 'block' : 'none' }`}}>
        <div className={`global__line ${line && "showLine"}`}/>
      </div>
    </div>
  );
};
