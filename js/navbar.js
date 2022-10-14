import { getElement, getElements } from "../js/utils.js";

const navLInksA = getElements(".nav_links-li a");
const navLinks = getElement(".nav_links");
const navBtn = getElement(".nav_btn");
let menuOpen = false;

navLInksA.forEach((link) => {
  link.addEventListener("click", () => {
    navLInksA.forEach((itemLink) => {
      itemLink.classList.remove("activeLink");
    });
    link.classList.toggle("activeLink");
  });
});

navBtn.addEventListener("click", () => {
  console.log("kliks");
  if (!menuOpen) {
    navLinks.style.height = "315px";

    menuOpen = true;
  } else {
    navLinks.style.height = "0";
    menuOpen = false;
  }
});
