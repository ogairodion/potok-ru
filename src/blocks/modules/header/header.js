import feather from "feather-icons";

const header = document.querySelector('.header');
const header_info = header.querySelector('.header__info');
const header_phone = header.querySelector('.header__phone');
const header_mail = header.querySelector('.header__mail');
const header_btn = header.querySelector('.button');
const header_bottom = header.querySelector('.header__bottom .l-default');
const header_menu = header_bottom.querySelector('.header-menu');
const header_mobile = header.querySelector('.header__mobile');
const header_mobile_menu = header_mobile.querySelector('.header__mobile-menu');
const header_mobile_btn = header_mobile.querySelector('.header__mobile-btn');
const header_mobile_phone = header_mobile.querySelector('.header__mobile-phone');
const header_mobile_mail = header_mobile.querySelector('.header__mobile-mail');
const burgers = header.querySelectorAll('.header__burger');
const body = document.querySelector('body');
const html = document.querySelector('html');

let windowWidth = 0;
windowWidth = window.innerWidth;

adaptive(windowWidth);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    adaptive(windowWidth);

    if (windowWidth > 1024) {
        body.classList.remove('overflow-y-hidden');
        html.classList.remove('overflow-y-hidden');
        header_mobile.classList.remove('open');
    }
})

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 76) {
        header.classList.add('on-scroll');
        body.classList.add('on-scroll');
    } else {
        header.classList.remove('on-scroll');
        body.classList.remove('on-scroll');
    }
});

function adaptive(windowWidth) {
    switch (true) {
        case windowWidth < 1024 && !header_mobile_menu.contains(header_menu):
            header_mobile_btn.append(header_btn);
            header_mobile_phone.append(header_phone);
            header_mobile_mail.append(header_mail);
            header_mobile_menu.append(header_menu);
            break;
        case windowWidth > 1024 && header_mobile_menu.contains(header_menu):
            header_info.append(header_phone);
            header_info.append(header_mail);
            header_info.append(header_btn);
            header_bottom.append(header_menu);
            break;
    }
}

if (burgers.length) {
    burgers.forEach((burger) => {
        burger.addEventListener('click', () => {
            body.classList.toggle('overflow-y-hidden');
            html.classList.toggle('overflow-y-hidden');
        
            if (windowWidth < 1024) {
                header_mobile.classList.toggle('open');
            }
        });
    });
}

feather.replace()
