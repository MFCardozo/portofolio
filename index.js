/*toggle nav mobile*/
const hamburguer = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav__list");
hamburguer.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

links.forEach((click) => {
  click.addEventListener("click", () =>
    document.body.classList.remove("nav-open")
  );
});

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

/*hide footer fixed in home*/
const footerElement = document.getElementById("footer");
const logoFooter = document.getElementById("logo__footer");
const myScrollFunc = () => {
  var y = window.scrollY;
  if (y >= 1000) {
    footerElement.className = "footer";
  } else {
    footerElement.className = "footer--hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

/*lazy loading logo footer*/
window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    logoFooter.style.opacity = "1";
    logoFooter.style.transform = "scaleX(1)";
  }
};
