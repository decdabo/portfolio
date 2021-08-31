import React from 'react';

export const LoadingScreen = () => {
    return (
        <div className="load__loading-screen">
            <img 
                src="assets/loading/load.gif" 
                alt="loading..." 
                className="load__load-img animate__animated animate__fadeIn"
                />
        </div> 
    );
}
