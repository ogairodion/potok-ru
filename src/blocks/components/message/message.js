const messages = document.querySelectorAll('.lk-message');

if (messages.length) {
    messages.forEach((message) => {
        const close = message.querySelector('.close');
        const shadow = message.querySelector('.shadow');

        close.addEventListener('click', () => {
            message.classList.add('hidden');
        });

        if (shadow && !message.classList.contains('lk-message-start')) {
            setTimeout(() => {
                shadow.remove();
            }, 3000);
        }
    });
}