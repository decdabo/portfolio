export const workAnimation = () => {
	const hideButtonWork = document.getElementById('nav__button');
	const showWork = document.getElementById('work__box');
	const fontHide = document.getElementsByClassName('nav__navbar-jobs-title');
	const showApp = document.getElementsByClassName('work__work-app');
	const showTitle = document.getElementsByClassName('work__work-title-off');
	const showButton = document.getElementsByClassName('work__work-button');

	fontHide[0].classList.add('hide-title');
	showApp[0].classList.add('show-app');
	showButton[0].classList.add('activate-button');
	showTitle[0].classList.add('on');
	hideButtonWork.classList.add('morejobs-hide');
	showWork.classList.add('work-activate');
}