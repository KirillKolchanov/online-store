import allCars from '../db-cars/cars';

const carsContainer = document.querySelector(".cars-container") as HTMLElement;
import {addingToCart, generateCard} from '../generator/generator';

const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

const sortedArrFromMaxPrice = [...allCars.sort((a,b) => b.price - a.price)];
const sortedArrNewest = [...allCars.sort((a,b) => b.age - a.age)];
const sortedArrOldest = [...allCars.sort((a,b) => a.age - b.age)];

const sort = () => {
      // Генерация карт при загрузки страницы
      carsContainer.innerHTML = "";
      for (let i = 0; i < sortedArrFromMinPrice.length; i++) {
        carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
      }
      addingToCart();

      const sorting = document.querySelector(".form-control-sm") as HTMLSelectElement;

      //Генерация карт при изменении сортировки
      sorting.addEventListener("change", () => {
        carsContainer.innerHTML = '';
        if (sorting.value === "Low to High") {
          for (let i = 0; i < allCars.length; i++) {
            carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
          }
        }

        if (sorting.value === "High to Low") {
          for (let i = 0; i < allCars.length; i++) {
            carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMaxPrice[i]));
          }
        }

        if (sorting.value === "Newest First") {
          for (let i = 0; i < allCars.length; i++) {
            carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrNewest[i]));
          }
        }

        if (sorting.value === "Oldest First") {
          for (let i = 0; i < allCars.length; i++) {
            carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrOldest[i]));
          }
        }
        addingToCart();
      })
}

export default sort;