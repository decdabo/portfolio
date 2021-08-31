import React from 'react'
import { useHistory } from 'react-router-dom'

export const ReactScreen = () => {

    const history = useHistory();

    return (
        <div className="skills__knowledge-container">

            <div className="skills__knowledge-icon-box">
                <p className="skills__knowledge-icon react-knowledge animate__animated animate__fadeInLeft">
                    <i className="fab fa-react" />
                </p>
            </div>

            <div className="skills__knowledge-main-container animate__animated animate__fadeIn">
                <div className="skills__knowledge-title-box">
                    <h1 className="skills__knowledge-title" >
                        React Knowledge
                    </h1>
                    <div className="skills__title-line animate__animated animate__zoomIn"/>
                </div>
                <div className="skills__star-container animate__animated animate__fadeInUp">
                    <div className="skills__star-box">
                        <div className="skills__star react-on" />
                        <div className="skills__star react-on" />
                        <div className="skills__star react-on" />
                        <div className="skills__star react-on" />
                        <div className="skills__star" />
                    </div>
                    <div className="skills__back-icon-box">
                        <p 
                          className="skills__back-icon" 
                          onClick={()=>history.push("/skills")}
                          >
                            <i className="fas fa-chevron-circle-left" />
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
