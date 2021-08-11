import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import '../styles/Styles.scss';
import { AboutScreen } from "../components/about/AboutScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { NavApp } from "../components/nav/NavApp";
import { SkillsApp } from "./SkillsApp";

export const AppRouter = () => {

    return (

    <div className="body">

        <Router>

            <NavApp />

            <div className = "body__line animate__animated animate__zoomIn animate__slower" />
            
            <div className = "body__window-conteiner animate__animated animate__slideInUp animate__slow">

                <div className = "body__window-box ">

                    <div className = "body__window">

                        <Switch>

                            <Route exact path="/" component = {  HomeScreen } />

                            <Route path="/about" component = { AboutScreen } />

                            <Route path="/skills" component={ SkillsApp } />

                            <Route path="/contact" component = { ContactScreen } />

                            <Redirect to="/" />
                            
                        </Switch>

                    </div>

                    <div className = "body__solid-box" id="solid">

                        <div className = "body__solid-box-line" id="line"/>

                    </div>

                </div>

            </div>

        </Router> 

    </div>

    );
}