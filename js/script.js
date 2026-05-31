const slides = document.querySelectorAll(".gallery-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoSlide();
});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3000);
}

function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

showSlide(currentSlide);
startAutoSlide();