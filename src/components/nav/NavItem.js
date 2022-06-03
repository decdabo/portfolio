import React from "react";
import { Link } from "react-router-dom";

import { windowAnimatior } from "../../helpers/windowAnimator";

export const NavItem = ({ data, states }) => {
  const { name, icon, title, to } = data;
  const { setWindow, setLine } = states;
  
  const handleClick = () => {
    windowAnimatior(setWindow, setLine, name);
  }
  
  return (
    <div className="navbar__list" onMouseDown={handleClick}>
      <li className="list__text">
        <strong>{title}</strong>  
        <i className={icon} />
        <Link
          to={`${to}`}
          id={`${name}`}
          className="text__link"
        />
      </li>
      <div className="list__line" />
    </div>
  );
};
