import allCars from '../../db-cars/cars';
import {addingToCart, generateCard} from '../../generator/generator';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;

const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

const fuelFilter = () => {
  const filterFuelInputPetrol = document.querySelector(".filter-fuel-input-petrol") as HTMLInputElement;
  const filterFuelInputDiesel = document.querySelector(".filter-fuel-input-diesel") as HTMLInputElement;
  const filterFuelInputElectro = document.querySelector(".filter-fuel-input-electro") as HTMLInputElement;

  filterFuelInputPetrol.addEventListener("change", () => {
    if (filterFuelInputPetrol.checked) {
      carsContainer.innerHTML = "";
      const filteredCars = allCars.filter(car => car.fuel === 'petrol')

      for (let i = 0; i < filteredCars.length; i++) {
        carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
      }
    }
    addingToCart();
  })

  filterFuelInputDiesel.addEventListener("change", () => {
    if (filterFuelInputDiesel.checked) {
      carsContainer.innerHTML = "";
      const filteredCars = allCars.filter(car => car.fuel === 'diesel')

      for (let i = 0; i < filteredCars.length; i++) {
        carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
      }
    }
    addingToCart();
  })

  filterFuelInputElectro.addEventListener("change", () => {
    if (filterFuelInputElectro.checked) {
      carsContainer.innerHTML = "";
      const filteredCars = allCars.filter(car => car.fuel === 'electro')

      for (let i = 0; i < filteredCars.length; i++) {
        carsContainer.insertAdjacentHTML('beforeend', generateCard(filteredCars[i]));
      }
    }
    addingToCart();
  })

  const fuelResetButton = document.querySelector(".fuel-reset-button") as HTMLButtonElement;
  fuelResetButton.addEventListener("click", () => {
    filterFuelInputPetrol.checked = false;
    filterFuelInputDiesel.checked = false;
    filterFuelInputElectro.checked = false;
    carsContainer.innerHTML = "";
    for (let i = 0; i < allCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
    }
    addingToCart();
  })
}

export default fuelFilter;