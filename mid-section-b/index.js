document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove("active");
        });

        slides[index].classList.add("active");
        thumbnails[index].classList.add("active");
    }

    prevButton.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
