import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AboutScreen } from "../components/about/AboutScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { NavApp } from "../components/nav/NavApp";
import { SkillsScreen } from "../components/skills/SkillsScreen";
import "../styles/Styles.scss";

export const DashboardRouter = () => {
  const { images } = useSelector(state => state.bg)
  const [window, setWindow] = useState("");
  const [line, setLine] = useState("");
  const states = {
    setWindow,
    setLine
  }

  return (
    <Router basename="/portfolio">
      <NavApp states={states} />
      <div className="body__line animate__animated animate__zoomIn animate__slower" />
      <div className="body__panel animate__animated animate__slideInUp animate__slow">
        <div className="panel__content-container">
          <div className="content__screen">
              <Switch>
                <Route path="/home" render={ () => <HomeScreen pic={images.home.imageURL} /> } />
                <Route path="/about" render={ () => <AboutScreen pic={images.about.imageURL} /> } />
                <Route path="/skills" render={ () => <SkillsScreen pic={images.skills.imageURL} /> } />
                <Route path="/contact" render={ () => <ContactScreen pic={images.contact.imageURL} /> } />
                <Redirect to="/home" />
              </Switch>
          </div>
          <div className={`panel__window ${window}`} >
            <figure className={`window__line ${line}`} />
          </div>
        </div>
      </div>
    </Router>
  );
};
