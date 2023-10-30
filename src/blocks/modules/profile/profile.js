const forms = document.querySelectorAll('.profile__form');
const removeBtns = document.querySelectorAll('.remove');

if (forms.length) {
    forms.forEach((form) => {
        const edit = form.querySelector('.profile__edit');

        edit.addEventListener('click', () => {
            form.classList.toggle('profile__form--edit');
        });
    });
}

if (removeBtns.length) {
    removeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.form__input');
            const input = parent.querySelector('input');
            const textarea = parent.querySelector('textarea');

            if (input) {
                input.value = '';
            } else {
                textarea.value = '';
            }
        });
    });
}