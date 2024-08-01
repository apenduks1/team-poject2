"use strict";
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const hrs = document.querySelectorAll(".ourTeam__hr");

  hrs.forEach((hr) => hr.classList.remove("active-hr"));

  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  hrs[currentSlide].classList.add("active-hr");

  document.querySelector(".slides").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

setInterval(() => {
  changeSlide(1);
}, 5000);