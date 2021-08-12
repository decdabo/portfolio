export const hideWork = () => {
	const hideButtonWork = document.getElementById('nav__button');
	const fontHide = document.getElementsByClassName('nav__navbar-jobs-title');
	const showWork = document.getElementById('work__box');
	const showTravolta = document.getElementsByClassName('work__work-travolta');
	const showButton = document.getElementsByClassName('work__work-button');

	fontHide[0].classList.remove('hide-title');
	hideButtonWork.classList.remove('morejobs-hide');
	showWork.classList.remove('work-activate');
	showTravolta[0].classList.remove('show-travolta');
	showButton[0].classList.remove('activate-button');
}