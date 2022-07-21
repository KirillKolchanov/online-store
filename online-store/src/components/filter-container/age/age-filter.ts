import allCars from '../../db-cars/cars';
import {addingToCart, generateCard} from '../../generator/generator';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;

const filterCarsByAge = (min: number, max: number) => {
  carsContainer.innerHTML = "";
  const filteredCars = allCars.filter(car => car.age >= min && car.age <= max)

  for (let i = 0; i < filteredCars.length; i++) {
    carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
  }

  addingToCart()
}

const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

const ageFilter = () => {
  let minAge = '2010';
  let maxAge = '2022';
  const filterSelectAgeMin = document.querySelector(".filter-select-age-min") as HTMLSelectElement;
  const filterSelectAgeMax = document.querySelector(".filter-select-age-max") as HTMLSelectElement;

  filterSelectAgeMin.addEventListener("change", (e) => {
    if (minAge === 'Min' ) {
      minAge = '2010';
    } else {
      minAge = (e.target as HTMLSelectElement).value.toString();
    }

    filterCarsByAge(+minAge, +maxAge)
  })

  filterSelectAgeMax.addEventListener("change", (e) => {
    if (maxAge === 'Max') {
      maxAge = '2022';
    } else {
      maxAge = (e.target as HTMLSelectElement).value.toString();
    }

    filterCarsByAge(+minAge, +maxAge)
  })

  const ageResetButton = document.querySelector(".age-reset-button") as HTMLButtonElement;
  ageResetButton.addEventListener("click", () => {
    filterSelectAgeMin.value = 'Min';
    filterSelectAgeMax.value = 'Max';
    carsContainer.innerHTML = "";
    for (let i = 0; i < allCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
    }
    addingToCart();
  })
}

export default ageFilter;