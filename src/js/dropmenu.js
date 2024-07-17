document.addEventListener('DOMContentLoaded', function () {
    const headerItem = document.querySelector('.header__dropdown');
    const headerMenu = document.querySelector('.header__menu');
    const headerArrow = headerItem.querySelector('.header__arrow');
  
    headerItem.addEventListener('click', function () {
      console.log(headerMenu);
      headerMenu.classList.toggle('is__hidden');
    });
  });