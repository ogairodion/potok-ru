const order_qestions = document.querySelectorAll('.order__item-question');

if (order_qestions.length) {
    order_qestions.forEach((question) => {
        const icon = question.querySelector('.order__question-icon');
        const message = question.querySelector('.order__message');
        const close = message.querySelector('.order__message-close');

        icon.addEventListener('click', () => {
            message.classList.toggle('show');
        });

        close.addEventListener('click', () => {
            message.classList.remove('show');
        });
    });
}