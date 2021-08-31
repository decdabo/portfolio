import React from 'react'
import { Link } from 'react-router-dom'

export const SkillsScreen = () => {
    return (
        <div className = "skills__skills-container">
                <div className = "skills__title-cointeiner">
                    <h1 className = "skills__title animate__animated animate__fadeInDown">Skills</h1>
                    <div className = "skills__title-line animate__animated animate__zoomIn"/>
                </div>

                <div className = "skills__icons-container animate__animated animate__fadeInUp">
                        <Link to="/skills/html" className="skills__icon html">
                            <i className="fab fa-html5" />
                        </Link>
                        <Link to="/skills/css" className="skills__icon css">
                            <i className="fab fa-css3-alt" />
                        </Link>
                        <Link to="/skills/javascript" className="skills__icon  javascript">
                            <i className="fab fa-js-square" />
                        </Link>
                        <Link to="/skills/react" className="skills__icon react">
                            <i className="fab fa-react" />
                        </Link>
                        <Link to="/skills/sass" className="skills__icon sass">
                            <i className="fab fa-sass" />
                        </Link>
                </div>
        </div>
    )
}
