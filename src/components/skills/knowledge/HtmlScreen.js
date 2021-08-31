import React from 'react'
import { useHistory } from 'react-router-dom'

export const HtmlScreen = ( ) => {

    const history = useHistory();

    return (
        <div className="skills__knowledge-container">

            <div className="skills__knowledge-icon-box">
                <p className="skills__knowledge-icon html-knowledge animate__animated animate__fadeInLeft">
                    <i className="fab fa-html5"/>
                </p>
            </div>
            
            <div className="skills__knowledge-main-container animate__animated animate__fadeIn">
                <div className="skills__knowledge-title-box">
                    <h1 className="skills__knowledge-title" >
                        HTML Knowledge
                    </h1>
                    <div className="skills__title-line animate__animated animate__zoomIn"/>
                </div>
                <div className="skills__star-container animate__animated animate__fadeInUp">
                    <div className="skills__star-box">
                        <div className="skills__star html-on" />
                        <div className="skills__star html-on" />
                        <div className="skills__star html-on" />
                        <div className="skills__star html-on" />
                        <div className="skills__star html-on" />
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
