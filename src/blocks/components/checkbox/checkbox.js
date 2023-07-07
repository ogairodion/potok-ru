const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((checkbox) => {
    const input = checkbox.querySelector('input');

    checkbox.addEventListener('click', (e) => {
        getChecked(checkbox);
    });

    getChecked(checkbox);

    if (input.disabled === true) {
        checkbox.classList.add('disabled');
    } else {
        checkbox.classList.remove('disabled');
    }
});

function getChecked(checkbox) {
    const input = checkbox.querySelector('input');

    if (input.checked === true) {
        checkbox.classList.add('checked');
    } else {
        checkbox.classList.remove('checked');
    }
}