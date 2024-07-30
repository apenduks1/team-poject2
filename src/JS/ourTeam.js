"use strict"
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
