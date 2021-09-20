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

console.log('Pull request link: https://github.com/AndyGuit/rsschool-cv/pull/3' +
  '\nМеню появляется только в разрешениях ниже 800px (планшет вертикально)' +
  '\nБургер появляется только на мобилках' +
  '\nСамооценка:' +
  '\nвёрстка валидная +10' +
  '\nвёрстка семантическая +20' +
  '\nдля оформления СV используются css-стили +10' +
  '\nконтент размещается в блоке, который горизонтально центрируется на странице.' +
  '\nФоновый цвет, если он есть, тянется во всю ширину страницы +10' +
  '\nвёрстка адаптивная +10' +
  '\nесть адаптивное бургер-меню +10' +
  '\nприсутствует изображение +10' +
  '\nCV содержит контакты для связи +10' +
  '\nCV содержит пример вашего кода +10' +
  '\nCV содержит изображения-ссылки на выполненные вами проекты' +
  '\nCV выполнено на английском языке +10' +
  '\nвыполнены требования к Pull Request +10' +
  '\nесть видеорезюме автора CV на английском языке +0' +
  '\nдизайн, оформление, качество выполнения CV не ниже чем в примерах +10')