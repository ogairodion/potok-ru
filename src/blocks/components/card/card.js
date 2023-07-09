const news_cards = document.querySelectorAll('.card-news');

if (news_cards.length) {
    news_cards.forEach((news_card) => {
        const more = news_card.querySelector('.card-news__more');

        more.addEventListener('click', (e) => {
            const content = news_card.querySelector('.card-news__content');
            const date = news_card.querySelector('.card-news__date');

            content.classList.toggle('open');
            date.classList.toggle('open');
            more.innerText = content.classList.contains('open') ? 'Скрыть' : 'Подробнее';
        });
    });
}