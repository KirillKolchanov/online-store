import allCars from '../../db-cars/cars';
import {addingToCart, generateCard} from '../../generator/generator';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;

const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

const priceFilter = () => {
// Реализация работы фильтрации по цене
const filterPriceInputFrom = document.querySelector(".filter-price-input-from") as HTMLInputElement;
const filterPriceInputTo = document.querySelector(".filter-price-input-to") as HTMLInputElement;
const priceApplyButton = document.querySelector(".price-apply-button") as HTMLInputElement;

priceApplyButton.addEventListener("click", () => {

  if (filterPriceInputFrom.value && !filterPriceInputTo.value) {
    carsContainer.innerHTML = "";
    const filteredCars = allCars.filter(car => +car.price.toString().split(".").join("") >= Number(filterPriceInputFrom.value))

    for (let i = 0; i < filteredCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
    }
  }

  if (!filterPriceInputFrom.value && filterPriceInputTo.value) {
    carsContainer.innerHTML = "";
    const filteredCars = allCars.filter(car => +car.price.toString().split(".").join("") <= Number(filterPriceInputTo.value))

    for (let i = 0; i < filteredCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
    }
  }

  if (filterPriceInputFrom.value && filterPriceInputTo.value) {
    carsContainer.innerHTML = "";
    const filteredCars = allCars.filter(car => +car.price.toString().split(".").join("") >= Number(filterPriceInputFrom.value) && +car.price.toString().split(".").join("") <= Number(filterPriceInputTo.value));

    for (let i = 0; i < filteredCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
    }
  }
  addingToCart();
})

// Нажатие на кнопку "reset" в фильтрации цены
const priceResetButton = document.querySelector(".price-reset-button") as HTMLButtonElement;
priceResetButton.addEventListener("click", () => {
  carsContainer.innerHTML = "";
  filterPriceInputFrom.value = "";
  filterPriceInputTo.value = "";
  for (let i = 0; i < allCars.length; i++) {
    carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
  }
  addingToCart();
})
}

export default priceFilter;
