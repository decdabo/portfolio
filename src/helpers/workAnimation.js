

export const workAnimation = () =>{

    const hideButtonWork = document.getElementById('nav__button');
    
    const fontHide = document.getElementsByClassName('nav__navbar-jobs-title');
    
    const showWork = document.getElementById('work__box');

    const showTravolta = document.getElementsByClassName('work__work-travolta');

    const showButton = document.getElementsByClassName('work__work-button');
    
        fontHide[0].classList.add('hide-title');
        
        hideButtonWork.classList.add('morejobs-hide');

        showWork.classList.add('work-activate');

        showTravolta[0].classList.add('show-travolta');

        showButton[0].classList.add('activate-button');
        

}