import allCars from '../../db-cars/cars';
import {addingToCart, generateCard} from '../../generator/generator';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;
const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

const makeFilter = () => {
  // Фильтрация карточек по изготовителю (нажатие на определенную кнопку)
  const filterMakeButtons = document.querySelectorAll(".filter-make-button") as NodeListOf<HTMLButtonElement>;
  filterMakeButtons.forEach(button => {
    button.addEventListener("click", () => {
      carsContainer.innerHTML = "";
      const filteredCars = allCars.filter(car => car.make === button.value)

      for (let i = 0; i < filteredCars.length; i++) {
        carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
      }
      addingToCart();
    })
  })

  // Нажатие на кнопку "reset" в фильтрации изготовителя
  const makeResetButton = document.querySelector(".make-reset-button") as HTMLButtonElement;
  makeResetButton.addEventListener("click", () => {
    carsContainer.innerHTML = "";
    for (let i = 0; i < allCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
    }
    addingToCart();
  })
}

export default makeFilter;