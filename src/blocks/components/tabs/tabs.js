const tabs = document.querySelectorAll('.tabs__item');
const tabs_content = document.querySelectorAll('.tabs__content');

if (tabs.length) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            const tab_item = e.currentTarget;
            
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }

            tab_item.classList.add('active');

            getActive(tab_item);
        });
    });

    getActive(tabs[0]);

    function getActive(tab) {
        tabs_content.forEach((tab_content) => {
            if (tab_content.dataset.value === tab.dataset.value) {
                tab_content.classList.add('active');
            } else {
                tab_content.classList.remove('active');
            }
        })
    }
}