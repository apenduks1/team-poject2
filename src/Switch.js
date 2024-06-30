document.addEventListener('DOMContentLoaded', function () {
  const switchElement = document.querySelector('.switch');
  const switchHandle = document.querySelector('.switch-handle');

  switchElement.addEventListener('click', function () {
    switchElement.classList.toggle('on');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const headerItem = document.querySelector('.header__dropdown');
  const headerMenu = headerItem.querySelector('.header__menu');
  const headerArrow = headerItem.querySelector('.header__arrow');

  headerItem.addEventListener('click', function () {
    console.log("click");
    headerMenu.style.display = 'flex';
  });

  document.addEventListener('click', function (e) {
    if (!headerItem.contains(e.target)) {
      headerMenu.style.display = 'none';
    }
  });
});
