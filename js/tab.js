let tab1 = document.querySelector('#tabOne');
let tab2 = document.querySelector('#tabTwo');
let tab3 = document.querySelector('#tabThree');
let tab4 = document.querySelector('#tabFour');

tabBtn = (param) => {
    console.log(param);
    switch (param){
        case 'secOne':
            // tab1.style.display = 'none';
            tab2.classList.remove('show','active');
            tab1.classList.add('show','active');
            break;
        case 'secTwo':
            tab1.classList.remove('show','active');
            tab3.classList.remove('show','active');
            tab2.classList.add('show','active');
            break;
        case 'secThree':
            tab1.classList.remove('show','active');
            tab2.classList.remove('show','active');
            tab4.classList.remove('show','active');
            tab3.classList.add('show','active');
            break;
        case 'secFour':
            tab1.classList.remove('show','active');
            tab3.classList.remove('show','active');
            tab4.classList.add('show','active');
        break;
    }
    
}