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


// let tab1 = document.querySelector('#tabOne');
// let tab2 = document.querySelector('#tabTwo');
// let tab3 = document.querySelector('#tabThree');
// let tab4 = document.querySelector('#tabFour');

// tabBtn = (param) => {
//     console.log(param);
//     switch (param){
//         case 'secOne':
//             // tab1.style.display = 'none';
//             tab2.classList.remove('show','active');
//             tab1.classList.add('show','active');
//             break;
//         case 'secTwo':
//             tab1.classList.remove('show','active');
//             tab3.classList.remove('show','active');
//             tab2.classList.add('show','active');
//             break;
//         case 'secThree':
//             tab1.classList.remove('show','active');
//             tab2.classList.remove('show','active');
//             tab4.classList.remove('show','active');
//             tab3.classList.add('show','active');
//             break;
//         case 'secFour':
//             tab1.classList.remove('show','active');
//             tab3.classList.remove('show','active');
//             tab4.classList.add('show','active');
//         break;
//     }
    
// }
