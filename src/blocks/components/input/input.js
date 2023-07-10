import Inputmask from "inputmask";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";

const inputs = document.querySelectorAll('.input');
const GLOBAL_LANG = $('html').attr('lang') || 'ru';

if (inputs.length) {
    inputs.forEach((input) => {
        const inputEl = input.querySelector('input');
        const textareaEl = input.querySelector('textarea');
        const trigger = inputEl ?? textareaEl;

        if (trigger) {
            trigger.addEventListener('focus', (e) => {
                e.target.classList.add('on-focus');
            });

            trigger.addEventListener('blur', (e) => {
                e.target.classList.remove('on-focus');
            });
        }

        if (textareaEl) {
            const count = input.querySelector('.input__count-real');

            textareaEl.addEventListener('input', (e) => {
                count.innerText = e.currentTarget.value.length;
            });
        }
    });
}

/* Перевод валидации на русский язык */
if (GLOBAL_LANG == 'ru') {
    $.extend($.validator.messages, {
        required: 'Обязательное поле',
        remote: 'Пожалуйста, введите правильное значение.',
        email: 'Пожалуйста, введите корректный адрес E-mail.',
        number: 'Пожалуйста, введите цифры.',
        maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
        minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
        min: $.validator.format("Введите значение, большее или равное {0}."),
        max: $.validator.format("Введите значение, меньшее или равное {0}.")
    });
}

/* Дополнительный метод валидации имени */
$.validator.addMethod('valname', function(value, element) {
    return this.optional(element) || /^[А-Яа-яЁёA-Za-z\s]{2,100}$/.test(value);
}, (GLOBAL_LANG == 'ru' ? 'Введите корректное имя' : 'Please enter a valid name'));

/* Дополнительный метод валидации e-mail */
$.validator.addMethod('valemail', function(value, element) {
    return this.optional(element) || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
}, (GLOBAL_LANG == 'ru' ? 'Пожалуйста, введите корректный адрес e-mail' : 'Please enter a valid email'));

/* Дополнительный метод валидации телефона на заполненность маски */
$.validator.addMethod('valphone', function(value, element) {
    return this.optional(element) || initIntl && initIntl.isValidNumber();
}, (GLOBAL_LANG == 'ru' ? 'Введите корректный телефон' : 'Please enter a valid phone'));

function getValidClasses(element) {
    let parent = $(element).parent();
    if ($(element).hasClass('valid')) {
        parent.addClass('valid-wrapper').removeClass('error-wrapper');
    } else {
        parent.removeClass('valid-wrapper').addClass('error-wrapper');
    }
}

$('form').each(function() { 
    $(this).validate({
        onkeyup: function (element, event) {
            if (event.which === 9 && this.elementValue(element) === "") {
                return;
            } else {
                let typeElement = $(element).attr('name');
                this.element(element);

                if (typeElement == 'phone' || typeElement == 'name' ||typeElement == 'email') {
                    getValidClasses(element);
                }
            }
        },
        rules: {
            name: {
                minlength: 2,
                maxlength: 50,
                valname: true
            },
            phone: {
                maxlength: 25,
                valphone: true
            },
            email: {
                email: true,
                valemail: true
            },
            message: {
                minlength: 1,
            },
        },
    });
});
