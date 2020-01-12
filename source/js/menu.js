var menu = document.querySelector('.page-header--flag');
var button = document.querySelector('.main-nav__toggle');
menu.classList.remove('page-header--no-js');
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(menu.classList.contains('page-header--close')) {
    menu.classList.remove('page-header--close');
    menu.classList.add('page-header');
  }
  else {
    menu.classList.add('page-header--close');
    menu.classList.remove('page-header');
  }
});
