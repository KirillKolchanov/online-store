import allCars from '../../db-cars/cars';

const carsContainer = document.querySelector(".cars-container");

function addingToCart() {
  // Реализация добавления элементов в корзину
  const cartCounter = document.querySelector(".cart-counter");
  const cardButtonsSubmit = document.querySelectorAll(".cars-submit-button");

  cartCounter.textContent = "0";

  cardButtonsSubmit.forEach(button => button.addEventListener("click", () => {
    button.classList.toggle("btn-danger");
    button.classList.toggle("btn-outline-success");

    if (button.classList.contains("btn-danger")) {
      cartCounter.textContent = `${+cartCounter.textContent + 1}`;
      button.textContent = "Remove from cart";
    } else {
      cartCounter.textContent = `${+cartCounter.textContent - 1}`;
      button.textContent = "Add to cart";
    }
  }))
}

function generateCard(obj) {
  return `<div class="cars-card">
  <div class="cars-card-img">
    <img class="rounded" src="${obj.img}" alt="">
  </div>
  <h6 class="cars-card-title text-center">${obj.make} ${obj.model}</h6>
  <div class="cars-card-price">
    <h6 class="cars-card-price-header">Price</h6>
    <h5 class="cars-card-price-number"><i class="bi bi-currency-dollar"></i> ${obj.price}</h5>
  </div>
  <div class="cars-card-description">
    <div class="cars-description">
      <p class="cars-card-year"><i class="bi bi-calendar"></i> ${obj.age}</p>
      <p class="cars-card-fuel"><i class="bi bi-droplet"></i> ${obj.fuel}</p>
    </div>
    <div class="cars-description">
      <p class="cars-card-miles"><i class="bi bi-speedometer2"></i> ${obj.miles}</p>
      <p class="cars-card-city"><i class="bi bi-geo-alt"></i> ${obj.city}</p>
    </div>
    <div class="cars-card-submit text-center">
      <button class="btn btn-outline-success cars-submit-button">Add to cart</button>
    </div>
  </div>
</div>`
}

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

  const fuelResetButton = document.querySelector(".fuel-reset-button");
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