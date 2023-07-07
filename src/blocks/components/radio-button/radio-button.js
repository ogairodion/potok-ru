const radios = document.querySelectorAll('.radio-button');

radios.forEach((radio) => {
    const input = radio.querySelector('input');

    radio.addEventListener('click', (e) => {
        getChecked(radio);
    });

    getChecked(radio);

    if (input.disabled === true) {
        radio.classList.add('disabled');
    } else {
        radio.classList.remove('disabled');
    }
});

function getChecked(radio) {
    const input = radio.querySelector('input');

    if (input.checked === true) {
        radio.classList.add('checked');
    } else {
        radio.classList.remove('checked');
    }
}