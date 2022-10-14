import { getElement, getElements } from "../js/utils.js";

const tabsBtns = getElements(".tabs_tablink");
const tabContents = getElements(".tabs_tabcontent");
// const tabsAll = getElement(".tabs_all");
const tabsAll = getElement(".tabs_group");

tabsAll.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    tabContents.forEach((tab) => {
      tab.classList.remove("active");
    });
    const element = getElement(`#${id}`);
    element.classList.add("active");
  }
});
