import React from 'react'
import { useHistory } from 'react-router-dom'

export const SassScreen = () => {

    const history = useHistory();

    return (
        <div className="skills__knowledge-container">

            <div className="skills__knowledge-icon-box">
                <p className="skills__knowledge-icon sass-knowledge animate__animated animate__fadeInLeft">
                    <i className="fab fa-sass" />
                </p>
            </div>

            <div className="skills__knowledge-main-container animate__animated animate__fadeIn">
                <div className="skills__knowledge-title-box">
                    <h1 className="skills__knowledge-title" >
                        Sass Knowledge
                    </h1>
                    <div className="skills__title-line animate__animated animate__zoomIn"/>
                </div>
                <div className="skills__star-container animate__animated animate__fadeInUp">
                    <div className="skills__star-box">
                        <div className="skills__star sass-on" />
                        <div className="skills__star sass-on" />
                        <div className="skills__star sass-on" />
                        <div className="skills__star" />
                        <div className="skills__star" />
                    </div>
                    <div className="skills__back-icon-box">
                        <p 
                          className="skills__back-icon" 
                          onClick={ ()=>history.push("/skills") }
                          >
                            <i className="fas fa-chevron-circle-left" />
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
