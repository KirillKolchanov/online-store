import allCars from '../db-cars/cars';
import {addingToCart, generateCard} from '../generator/generator';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;

const header = () => {

// Реализация работы лупы в header
const headerSearch = document.querySelector(".header-search") as HTMLElement;
const headerSearchInput = document.querySelector(".header-search-input") as HTMLInputElement;
const headerSearchTitle = document.querySelector(".header-search-title") as HTMLElement;
const headerSearchClear = document.querySelector(".header-search-clear") as HTMLButtonElement;
const headerSearchIcon = document.querySelector(".bi-search") as HTMLElement;

headerSearch.addEventListener("click", () => {
  headerSearch.classList.remove("header-search-hover");
  headerSearchIcon.classList.add("none");
  headerSearchInput.classList.remove("none");
  headerSearchTitle.classList.remove("none");
  headerSearchClear.classList.remove("none");
  headerSearchClear.classList.add("btn");

  headerSearchInput.classList.add("form-control")
  headerSearchInput.focus();
})

// Реализация работы поиска по странице
headerSearchInput.addEventListener("input", (e) => {
  carsContainer.innerHTML = "";
  const filteredCars = allCars.filter(car => ((car.make+car.model).toLowerCase()).includes((e.target as HTMLSelectElement).value.toLowerCase()));

  for (let i = 0; i < filteredCars.length; i++) {
    carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
  }
  addingToCart();

  if (!carsContainer.innerHTML) {
    carsContainer.innerHTML = `<h1 class="error-text">Nothing found!</h1>`;
  }
})

headerSearchClear.addEventListener("click", () => {

  headerSearchInput.value = "";
  carsContainer.innerHTML = "";
  const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

  for (let i = 0; i < allCars.length; i++) {
    carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
  }
  addingToCart();
})
}

export default header;