import React from "react";
import { Link } from "react-router-dom";
import { animationSlide } from "../../helpers/animationSlide";
import { hideWork } from "../../helpers/hideWork";
import { workAnimation } from "../../helpers/workAnimation";
import { WorksApp } from "./WorksApp";

export const NavApp = () => {

	const handleAnimation = async (e) => {
		const target = e.target;
		const name = target.childNodes[1].name;
		const link = `#${name}`;


		animationSlide(link);
	}

	const handleHide = () =>{

		hideWork();

	}

	const handleWorkShow = () => {
		workAnimation();
	}

	return (
		<div className="nav__navbox-container animate__animated animate__fadeIn animate__slow" >
			<div className="nav__navbar-entry-bar" >
				<div className="nav__navbar-solid-bar" />
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

			</div>

			<div className="nav__navbar-container" >

				<div className="list__box" >
					<li className="list__text" onMouseDown={ handleAnimation }>
						Home
						<Link
							name="home"
							id="home"
							to="/"
							style={{ display: "none" }}
						/>
					</li>
					<div className="list__line" />
				</div>

				<div className="list__box">
					<li className="list__text" onMouseDown={ handleAnimation }>
						About Me
						<Link
							name="about"
							to="/about"
							id="about"
							style={{ display: "none" }}
						/>
					</li>
					<div className="list__line" />
				</div>

				<div className="list__box">
					<li className="list__text" onMouseDown={ handleAnimation }>
						Skills
						<Link
							name="skills"
							to="/skills"
							id="skills"
							style={{ display: "none" }}
						/>
					</li>
					<div className="list__line" />
				</div>

				<div className="list__box">
					<li className="list__text" onMouseDown={ handleAnimation }>
						Contact
						<Link
							name="contact"
							to="/contact"
							id="contact"
							style={{ display: "none" }}
						/>
					</li>
					<div className="list__line" />
				</div>
			</div>
		</div>
	);
}