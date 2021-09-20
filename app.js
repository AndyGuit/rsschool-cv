const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('nav.menu ul');
const menuLinks = document.querySelectorAll('nav.menu ul li');

menuIcon.addEventListener('click', showNavMenu);

menuLinks.forEach(link => link.addEventListener('click', hideAndGoTo));

function hideAndGoTo() {
  if (menuIcon.classList.contains('_active')) {
    menuIcon.classList.remove('_active');
    menuList.classList.remove('_active');
    document.body.classList.remove('no-scroll');
  }
}

function showNavMenu() {
  menuIcon.classList.toggle('_active');
  menuList.classList.toggle('_active');
  document.body.classList.toggle('no-scroll');
}