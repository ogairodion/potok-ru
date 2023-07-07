const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((checkbox) => {
    const input = checkbox.querySelector('input');

    checkbox.addEventListener('click', (e) => {
        if (e.target.checked === true) {
            e.currentTarget.classList.add('checked');
        } else {
            e.currentTarget.classList.remove('checked');
        }
    });

    if (input.disabled === true) {
        checkbox.classList.add('disabled');
    } else {
        checkbox.classList.remove('disabled');
    }
});