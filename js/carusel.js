import { getElement, getElements } from "./utils.js";

let slideIndex = 1;

const prev = getElement(".prev");
const next = getElement(".next");

const showSlides = (n) => {
  let i;

  let slides = getElements(".mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);

prev.addEventListener("click", () => {
  showSlides((slideIndex += -1));
});
next.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});
