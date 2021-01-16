/*carousel of my work*/
const tracker = document.querySelector(".carousel__track");
const carouselSlides = Array.from(tracker.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
//obtain the width of images
const slideWidth = carouselSlides[0].getBoundingClientRect().width;

//assign a width proporcional each image for the carousel
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};

carouselSlides.forEach(setSlidePosition);

//when I click right,move slides to the right or left
const moveSlice = (track, current, target) => {
  track.style.transform = `translateX(-${target.style.left})`;
  current.style.transform = "scale(1.02,1.02)";
  current.style.opacity = ".3";
  target.style.transform = "scale(1,1)";
  target.style.opacity = "1";

  current.classList.remove("current-slide");
  target.classList.add("current-slide");
};

nextBtn.addEventListener("click", (e) => {
  const currentSlide = tracker.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide == null) {
    nextSlide = carouselSlides[0];
  }
  moveSlice(tracker, currentSlide, nextSlide);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = tracker.querySelector(".current-slide");

  let prevSlide = currentSlide.previousElementSibling;
  if (prevSlide == null) {
    prevSlide = carouselSlides[carouselSlides.length - 1];
  }
  moveSlice(tracker, currentSlide, prevSlide);
});

setInterval(() => nextBtn.click(), 5000);
