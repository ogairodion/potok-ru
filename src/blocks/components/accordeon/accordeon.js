const accordeon_items = document.querySelectorAll('.accordeon__item');

if (accordeon_items.length) {
    accordeon_items.forEach((accordeon) => {
        const accordeonTop = accordeon.querySelector('.accordeon__top');
        const content = accordeon.querySelector('.accordeon__content');

        accordeonTop.addEventListener('click', (e) => {
            if (content) {
                accordeon.classList.toggle('open');
            }
        });
    });
}