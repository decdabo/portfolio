import React from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ data, fnc }) => {
  const { name, icon, title, to } = data;

  const handleClick = () =>{
    fnc(name);
  }

  return (
    <div className="navbar__list"  onMouseDown={handleClick}>
      <li className="list__text">
        {title}  
        <i className={icon} />
        <Link
          name={`${name}`}
          id={`${name}`}
          to={`${to}`}
          className="text__link"
        />
      </li>
      <div className="list__line" />
    </div>
  );
};
