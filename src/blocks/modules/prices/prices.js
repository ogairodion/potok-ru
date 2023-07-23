import { Swiper } from 'swiper';

const pricesSliders = document.querySelectorAll('.prices-slider');

if (pricesSliders.length) {
    pricesSliders.forEach((slider, index) => {
        slider.classList.add(`prices-slider-${index}`);  
        
        const pricesSlider = new Swiper(`.prices-slider-${index}`, {
            slidesPerView: 'auto',
            freeMode: true,
            resistance: true,
            resistanceRatio: 0,
            observer: true,
            observeParents: true,
        });
    });
}