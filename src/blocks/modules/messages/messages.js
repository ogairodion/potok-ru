const tableMenus = document.querySelectorAll('.table-menu');
const tabs = document.querySelectorAll('.messages__tab');
const tables = document.querySelectorAll('.messages__content');

tabs[0].classList.add('active');
tables[0].classList.remove('hidden');

if (tableMenus.length) {
    tableMenus.forEach((menu) => {
        const trigger = menu.querySelector('.table-menu__trigger');
        const items = menu.querySelector('.table-menu__items');
        const item = menu.querySelectorAll('.table-menu__item');

        trigger.addEventListener('click', () => {
            items.classList.toggle('hidden');
        });

        item.forEach((item) => {
            item.addEventListener('click', () => {
                items.classList.toggle('hidden');
            });
        });
    });
}

if (tabs.length) {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            getActive(index);
        });
    });
}

function getActive(id) {
    tabs.forEach((tab, index) => {
        if (id == index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    tables.forEach((table, index) => {
        if (id == index) {
            table.classList.remove('hidden');
        } else {
            table.classList.add('hidden');
        }
    });
}