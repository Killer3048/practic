const navLinks = document.querySelectorAll('.header__nav-link');


navLinks.forEach((link) => {
    link.addEventListener('click', () => {

        navLinks.forEach((l) => {
            l.classList.remove('header__nav-link_active');
        });

        link.classList.add('header__nav-link_active');
    });
});

const burgerMenu = document.querySelector('.header__burger-menu');
const headerNav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('show-nav');
});