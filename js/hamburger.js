import { getElement } from "../js/utils.js";

const navBtn = getElement(".nav_btn");
let navOpen = false;

navBtn.addEventListener("click", () => {
  if (!navOpen) {
    navBtn.classList.add("open");
    navOpen = true;
  } else {
    navBtn.classList.remove("open");
    navOpen = false;
  }
});
