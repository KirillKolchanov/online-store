import allCars from '../../db-cars/cars';

const carsContainer = document.querySelector(".cars-container");
const sortedArrFromMinPrice = [...allCars.sort((a,b) => a.price - b.price)];

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
  const makeResetButton = document.querySelector(".make-reset-button");
  makeResetButton.addEventListener("click", () => {
    carsContainer.innerHTML = "";
    for (let i = 0; i < allCars.length; i++) {
      carsContainer.insertAdjacentHTML('beforeend', generateCard(sortedArrFromMinPrice[i]));
    }
    addingToCart();
  })
}

export default makeFilter;