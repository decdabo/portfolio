import React from 'react';

export const HomeScreen = () => {
    return (
        <div className="home__home-conteiner">
            <div className="home__aside"/>
            
            <div className="home__home-main">

                <div className="home__home-line-out"/>
                
                <div className="home__title-conteiner">
                    <div className="home__name">
                        <h1>David</h1>
                    </div>
                    <div className="home__lastname">Caro</div>
                </div>

                <div className="home__home-line-in" />

                <div className="home__home-img-conteiner">
                    <img 
                        className="home__home-logo"
                        src="/assets/logo/logo.png"
                        alt="logo"/>
                </div>

                <div className="home__home-line-in" />

                <div className="home__portfolio-box">
                    <h2>Portfolio</h2>
                </div>

                <div className="home__home-line-out"/>

            </div>

            <div className="home__aside"/>
            
        </div>
    )
}
