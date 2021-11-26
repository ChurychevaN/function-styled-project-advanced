import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded',() => {
	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms();
	pictureSize('.sizes-block');
});