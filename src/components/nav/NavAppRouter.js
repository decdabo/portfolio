import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavAppRouter = ({ fncWindow, fncLine, animator }) => {
  const { pathname } = useLocation();
  const [ toggleButtons, setToggleButtons ] = useState(true);
  const regex = new RegExp('/backoffice/')
  const handleAnimation = () => {
    if (regex.exec(pathname)) {
      animator(fncWindow, fncLine, 'backtohome');
    } else {
      animator(fncWindow, fncLine, 'gobackoffice');
    }
  };

  useEffect(() => {
    if ( regex.exec(pathname) ) {
      setToggleButtons(false)
    } else {
      setToggleButtons(true)
    }
    // eslint-disable-next-line
  }, [pathname])

  return (
    <>
      {
        toggleButtons 
        ? 
        <div className="body__backoffice-link" onMouseDown={handleAnimation}>
          <strong 
            className="backoffice__link"
            >
            <i className="fas fa-users-cog" />  
          </strong>
          <Link 
            to="/backoffice"
            id="gobackoffice"
            style={{display: 'none'}}
          />
        </div>
        :
        <div className="body__backhome-link" onMouseDown={handleAnimation}>
          <div className="backhome__space"/>
          <strong className="backhome__link">
            <i className="fas fa-angle-left" />
          </strong>
          <Link 
            to="/" 
            id="backtohome"
            style={{display: 'none'}}
          />
        </div>
      }
    </>
  )
}
