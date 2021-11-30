import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded',() => {
	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms();
	pictureSize('.sizes-block');
	accordion('.accordion-heading');
	burger('.burger-menu', '.burger');
	scrolling('.pageup');
});