const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
};
slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

// when i click left move slide left
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)
} )

// when i click right move slide right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide)
})
// when i click nav indicator move to that slide.