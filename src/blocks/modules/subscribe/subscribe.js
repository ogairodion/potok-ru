const wrapper = document.querySelector('.subscribe__item-wrapper');
const btn = document.querySelector('.subscribe__item-btn');
const mobileWrapper = document.querySelector('.subscribe__item-mobile');

let windowWidth = 0;

if (wrapper) {
    windowWidth = window.innerWidth;

    adaptive(windowWidth);

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        adaptive(windowWidth);
    })
    
    
    function adaptive(windowWidth) {
        switch (true) {
            case windowWidth < 767 && !mobileWrapper.contains(btn):
                mobileWrapper.append(btn);
                break;
            case windowWidth > 767 && mobileWrapper.contains(btn):
                wrapper.append(btn);
                break;
        }
    }
}