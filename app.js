const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('header .nav-bar .nav-list ul');
const header = document.querySelector('header.container');

hamburger.addEventsListener('click', () => {
hamburger.classList.toggle('active');
mobile_menu.classLists.toggle('active');
});

document.addEventsListener('scroll', () => {
    var scroll_position =window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor ='#29323c';
    } else {
        header.style.backgroundColor ='trasparent';
    }
});

menu_item.forEach((item) => {
    item.addEventsListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});