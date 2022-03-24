import React from "react";
import { NavItem } from "./NavItem";
import { navlist } from "./navlist";
// import { hideWork } from "../../helpers/hideWork";
// import { workAnimation } from "../../helpers/workAnimation";
// import { WorksApp } from "./WorksApp";

export const NavApp = ({ states }) => {
  return (
    <nav className="nav animate__animated animate__fadeIn animate__slow">
      <div className="nav__bar-green" />
      {/* <div className="nav__navbar-entry-bar" >
				<div className="nav__navbar-jobs-container">
					<WorksApp />
					<div
						className="nav__navbar-morejobs"
						onClick={ handleWorkShow }
						id="nav__button"
					>
						<div 
						 className="nav__navbar-jobs-triangle" 
						 onClick={handleHide}
						 />
						<h1 className="nav__navbar-jobs-title">
							More jobs
						</h1>
					</div>
				</div>
			</div> */}
      <main className="nav__navbar">
        {navlist.map((data) => {
          return <NavItem key={data.name} data={data} states={states} />;
        })}
      </main>
    </nav>
  );
};
