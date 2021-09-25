export const hideWork = () => {
	const hideButtonWork = document.getElementById('nav__button');
	const fontHide = document.getElementsByClassName('nav__navbar-jobs-title');
	const showWork = document.getElementById('work__box');
	const showApp = document.getElementsByClassName('work__work-app');
	const showButton = document.getElementsByClassName('work__work-button');
	const showTitle = document.getElementsByClassName('work__work-title-off');

	hideButtonWork.classList.remove('morejobs-hide');
	showWork.classList.remove('work-activate');
	fontHide[0].classList.remove('hide-title');
	showApp[0].classList.remove('show-app');
	showButton[0].classList.remove('activate-button');
	showTitle[0].classList.remove('on');
}