const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-pane');

function selectItem(e){
    removeActiveClass();
    removeShowClass();
    this.classList.add('active');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show', 'active');
};

function removeActiveClass(){
    tabItems.forEach(item => item.classList.remove('active'));
};

function removeShowClass(){
    tabContentItems.forEach(item => item.classList.remove('show', 'active'));
};

tabItems.forEach(item => item.addEventListener('click', selectItem));
