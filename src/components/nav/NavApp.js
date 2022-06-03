import React from "react";
import { NavItem } from "./NavItem";
import { navlist } from "./navlist";

export const NavApp = ({ states }) => {
  return (
    <nav className="nav animate__animated animate__fadeIn animate__slow">
      <div className="nav__bar-green" />
      <main className="nav__navbar">
        {navlist.map((data) => {
          return <NavItem key={data.name} data={data} states={states} />;
        })}
      </main>
    </nav>
  );
};
