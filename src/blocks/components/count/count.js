const counts = document.querySelectorAll('.count');

if (counts.length) {
    counts.forEach((count) => {
        const plus = count.querySelector('.count-plus');
        const minus = count.querySelector('.count-minus');
        const result = count.querySelector('.count-number');
        let number = parseInt(result.innerText);

        plus.addEventListener('click', () => {
            number += 1;
            result.innerText = number;
        });

        minus.addEventListener('click', () => {
            if (number !== 0) {
                number -= 1;
            }
            result.innerText = number;
        });

    });
}