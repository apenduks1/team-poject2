document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header__dropdown"),t=document.querySelector(".header__menu");e.querySelector(".header__arrow");e.addEventListener("click",(function(){console.log(t),t.classList.toggle("is__hidden")}))}));var menuItems=document.querySelectorAll(".header__menu-item"),sections=document.querySelectorAll(".all");function handleMenuItemClick(e){var t=e.target,n=t.textContent.trim();sections.forEach((function(e){var t=e.getAttribute("data-type");e.style.display="Всі секції"===n||t===n?"block":"none"})),menuItems.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}menuItems.forEach((function(e){e.addEventListener("click",handleMenuItemClick)}));
//# sourceMappingURL=index.5755c66c.js.map
