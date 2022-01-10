import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AboutScreen } from "../components/about/AboutScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { NavApp } from "../components/nav/NavApp";
import "../styles/Styles.scss";
import { SkillsScreen } from "../components/skills/SkillsScreen";

export const AppRouter = () => {
  const [window, setWindow] = useState("");
  const [line, setLine] = useState("");

  const handleAnimation = (link) => {
    const query = document.querySelector(link);
    setTimeout(() => {
      setLine("showLine");
    }, 0);
    setTimeout(() => {
      setWindow("closeWindow");
    }, 500);
    setTimeout(() => {
      query.click();
    }, 800);
    setTimeout(() => {
      setWindow("");
    }, 1000);
    setTimeout(() => {
      setLine("");
    }, 1500);
  };

  const fnc = async (e) => {
    const link = `#${e}`;
    handleAnimation(link);
  };

  return (
    <div className="body">
      <Router basename="/portfolio">
        <NavApp handleAnimation={fnc} />
        <div className="body__line animate__animated animate__zoomIn animate__slower" />
        <div className="body__panel animate__animated animate__slideInUp animate__slow">
          <div className="panel__content-container">
            <div className="content__screen">
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/about" component={AboutScreen} />
                <Route path="/skills" component={SkillsScreen} />
                <Route path="/contact" component={ContactScreen} />
                <Redirect to="/" />
              </Switch>
            </div>
            <div className={`panel__window ${window}`} id="solid">
              <div className={`window__line ${line}`} id="line" />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};
