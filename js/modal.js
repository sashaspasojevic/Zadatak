import { getElement, getElements } from "../js/utils.js";

const modalBtns = getElements(".tabs_article-btn");
const modal = getElement(".modal_overlay");
const closeBtn = getElement(".close_btn");
const modalContent = getElement(".modal_container");
const imgDOM = getElement(".modal_article-header img");
const titleDOM = getElement(".modal_article-header h3");
const priceDOM = getElement(".modal_article-footer span");
const modalCheckbox = getElements(".modal_checkbox");

let priceOfCar = 0;
let isAllCheck = false;

const removeCheck = () => {
  modalCheckbox.forEach((item) => {
    item.checked = false;
  });
};

const showValues = (e) => {
  let id = e.target.dataset.id;

  imgDOM.src = `img/ProductImages/product-${id}.png`;
  let title = id.toUpperCase().split("-");
  titleDOM.textContent = `${title[1]} ${title[2]}`;

  if (id === "card-audi-q3") {
    priceOfCar = 29999;
  }
  if (id === "card-audi-a4") {
    priceOfCar = 24999;
  }
  if (id === "card-audi-a3") {
    priceOfCar = 19999;
  }
  if (id === "card-audi-q7") {
    priceOfCar = 39999;
  }

  priceDOM.textContent = `${priceOfCar.toFixed(2)}\u20AC`;
};

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modal.classList.add("open_modal");
    showValues(e);
  });
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open_modal");
    removeCheck();
  });
});

modalCheckbox.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.checked) {
      priceOfCar = priceOfCar + Number(item.value);
      priceDOM.textContent = `${priceOfCar.toFixed(2)}\u20AC`;
    } else {
      priceOfCar = priceOfCar - Number(item.value);
      // console.log(priceOfCar);
      priceDOM.textContent = `${priceOfCar.toFixed(2)}\u20AC`;
    }
  });
});
