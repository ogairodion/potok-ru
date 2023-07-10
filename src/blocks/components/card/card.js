const news_cards = document.querySelectorAll('.card-news');
const reviews_cards = document.querySelectorAll('.card-reviews');

if (news_cards.length) {
    news_cards.forEach((news_card) => {
        const more = news_card.querySelector('.card-news__more');

        more.addEventListener('click', (e) => {
            const content = news_card.querySelector('.card-news__content');
            const date = news_card.querySelector('.card-news__date');

            content.classList.toggle('open');
            date.classList.toggle('open');
            more.innerText = content.classList.contains('open') ? 'Свернуть новость' : 'Подробнее';
        });
    });
}

if (reviews_cards.length) {
    reviews_cards.forEach((reviews_card) => {
        const more = reviews_card.querySelector('.card-reviews__more');

        more.addEventListener('click', (e) => {
            const content = reviews_card.querySelector('.card-reviews__content');

            content.classList.toggle('open');
            more.innerText = content.classList.contains('open') ? 'Свернуть отзыв' : 'Читать отзыв полностью';
        });
    });
}