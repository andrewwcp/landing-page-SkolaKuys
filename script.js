const hamburger = document.querySelector('#hamburger');
const showMenu = document.querySelector('.nav-menu');

addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  showMenu.classList.toggle('active');
});
