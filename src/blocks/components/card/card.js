const news_cards = document.querySelectorAll('.card-news');
const reviews_cards = document.querySelectorAll('.card-reviews');
const about_cards = document.querySelectorAll('.card-about');

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

if (about_cards.length) {
    about_cards.forEach((card) => {
        const more = card.querySelector('.card-about__more');
        const paragraphs = card.querySelectorAll('p');

        for (let i = 0; i < paragraphs.length; i++) {
            if (i !== 0) {
                paragraphs[i].classList.add('hidden');
            }
        }
        
        more.addEventListener('click', () => {
            hideParagraphs(paragraphs, more);
        });
    });

    function hideParagraphs(paragraphs, more) {
        if (more.innerText == 'скрыть') {
            for (let i = 0; i < paragraphs.length; i++) {
                if (i !== 0) {
                    paragraphs[i].classList.add('hidden');
                }
            }
    
            more.innerText = 'раскрыть';
        } else {
            for (let i = 0; i < paragraphs.length; i++) {
                if (i !== 0) {
                    paragraphs[i].classList.remove('hidden');
                }
            }
    
            more.innerText = 'скрыть';
        }
        
    }
}