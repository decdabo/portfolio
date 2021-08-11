import React from 'react'
import { hideWork } from '../../helpers/hideWork'

export const WorksApp = () => {

    const handleWorkHide = () =>{

        hideWork();

    }

    return (
        <div className="work__work-conteiner" id="work__box">
            <div className="work__work-conteiner-box">
                <div className="work__work-main">

                    <img 
                        className="work__work-travolta"
                        src="/assets/404/travolta-confundido.gif" alt="travolta" 
                        />
                
                </div>

                <div 
                    className="work__work-button"
                    onClick={handleWorkHide}
                    >

                    <i className="fas fa-angle-up"/>

                </div>
                
            </div>
        </div>
    )
}
