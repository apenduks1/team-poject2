document.addEventListener('DOMContentLoaded', function () {
  const headerItem = document.querySelector('.header__dropdown');
  const headerMenu = document.querySelector('.header__menu');
  const headerArrow = headerItem.querySelector('.header__arrow');

  headerItem.addEventListener('click', function () {
    console.log(headerMenu);
    headerMenu.classList.toggle('is__hidden');
  });
});

const menuItems = document.querySelectorAll('.header__menu-item');

const sections = document.querySelectorAll('.all');

function handleMenuItemClick(event) {
  const menuItem = event.target;
  const menuItemText = menuItem.textContent.trim();

  sections.forEach(section => {
    const sectionType = section.getAttribute('data-type');

    if (menuItemText === 'Всі секції') {
      section.style.display = 'block';
    } else {
      if (sectionType === menuItemText) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    }
  });

  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  menuItem.classList.add('active');
}

menuItems.forEach(item => {
  item.addEventListener('click', handleMenuItemClick);
});
