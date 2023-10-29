const stepsWrapper = document.querySelector('.form__wrapper');
const steps = document.querySelectorAll('.form__step');
const stepsCount = document.querySelector('.step-all');
const stepsCurrent = document.querySelector('.step-current');
const formCode = document.querySelector('.form__code');

let isCode = false; 
let count = 0;

stepsCount.innerText = steps.length;
stepsCurrent.innerText = count + 1;

formCode.classList.add('hidden');

if (steps.length) {
    steps.forEach((step) => {
        const buttonNext = step.querySelector('.button--next');
        const buttonPrev = step.querySelector('.button--prev');
        const buttonCode = step.querySelector('.button--code');
        
        getActiveStep();

        if (buttonNext) {
            buttonNext.addEventListener('click', (event) => {
                event.preventDefault();
                count = count + 1;
                getActiveStep();
            });
        }

        if (buttonPrev) {
            buttonPrev.addEventListener('click', (event) => {
                event.preventDefault();
                if (count !== 0) {
                    count -= 1;
                    getActiveStep();
                }
            });
        }

        if (buttonCode) {
            buttonCode.addEventListener('click', (event) => {
                event.preventDefault();
                formCode.classList.remove('hidden');
                stepsWrapper.classList.add('hidden');
            });
        }
    })
}

function getActiveStep() {
    if (count > steps.length - 1) {
        isCode = false;
        activateCode();
    }

    steps.forEach((step, index) => {
        if (index == count) {
            step.classList.remove('hidden');
        } else {
            step.classList.add('hidden');
        }
    });

    stepsCurrent.innerText = count + 1;
}

function activateCode() {
    if (isCode) {
        formCode.classList.remove('hidden');
    }
}