const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const top = dropdown.querySelector('.dropdown__top');
    const list = dropdown.querySelectorAll('.dropdown__list');
    // const options = dropdown.querySelectorAll('.dropdown__list-item');
    // const current = dropdown.querySelector('.dropdown__current');
    // current.innerText = options[0].querySelector('.dropdown__list-text').innerText;

    top.addEventListener('click', (e) => {
        dropdown.classList.toggle('open');
    });
});