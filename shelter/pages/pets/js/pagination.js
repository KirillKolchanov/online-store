import allPets from '../../../assets/pets.js';

const petsContentArr = document.querySelectorAll(".pets-content");


const twoArrowLeft = document.querySelector(".two-arrow-left");
const arrowLeft = document.querySelector(".arrow-left");
const petsNavNumber = document.querySelector(".pets-nav-number");
const arrowRight = document.querySelector(".arrow-right");
const twoArrowRight = document.querySelector(".two-arrow-right");

function shuffleArr(array) {
  return array.sort(() => Math.random() - 0.5);
}

function disableArrowRight() {
  arrowRight.classList.add("disabled");
  arrowRight.setAttribute("disabled", "disabled");
  arrowRight.classList.remove("pets-button-active");
}

function disableTwoArrowRight() {
  twoArrowRight.classList.add("disabled");
  twoArrowRight.setAttribute("disabled", "disabled");
  twoArrowRight.classList.remove("pets-button-active");
}

function activateArrowRight() {
  arrowRight.classList.remove("disabled");
  arrowRight.classList.add("pets-button-active");
  arrowRight.removeAttribute("disabled");
}

function activateTwoArrowRight() {
  twoArrowRight.classList.remove("disabled");
  twoArrowRight.classList.add("pets-button-active");
  twoArrowRight.removeAttribute("disabled");
}

function disableArrowLeft() {
  arrowLeft.classList.add("disabled");
  arrowLeft.setAttribute("disabled", "disabled");
  arrowLeft.classList.remove("pets-button-active");
}

function disableTwoArrowLeft() {
  twoArrowLeft.classList.add("disabled");
  twoArrowLeft.setAttribute("disabled", "disabled");
  twoArrowLeft.classList.remove("pets-button-active");
}

function activateArrowLeft() {
  arrowLeft.classList.remove("disabled");
  arrowLeft.classList.add("pets-button-active");
  arrowLeft.removeAttribute("disabled");
}

function activateTwoArrowLeft() {
  twoArrowLeft.classList.remove("disabled");
  twoArrowLeft.classList.add("pets-button-active");
  twoArrowLeft.removeAttribute("disabled");
}

const paginationEngine = () => {

  /* Заполнение карточек случайным образом */
  for (let petsContent of petsContentArr) {
    const petsCardArr = petsContent.querySelectorAll(".pet-card");
    const shuffledAllPets = shuffleArr(allPets);
    for (let i = 0; i < petsCardArr.length; i++) {
      petsCardArr[i].firstElementChild.src = shuffledAllPets[i].img;
      petsCardArr[i].children[1].textContent = shuffledAllPets[i].name;
    }
  }

  let sliderOffset = 0;
  let currentSlide = 1;

  /* Реализация пагинации для всех разрешений */
arrowRight.addEventListener('click', function() {
  /* Для разрешения 1280 */
  if (document.documentElement.clientWidth >= 1280){
    sliderOffset = sliderOffset - 1280
    currentSlide += 1;

    if (currentSlide === 6) {
      disableArrowRight();
      disableTwoArrowRight();
    }

    if (currentSlide > 1) {
      activateArrowLeft();
      activateTwoArrowLeft();
    }
  }
  /* Для разрешения 768 */
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
    sliderOffset = sliderOffset - 768
    currentSlide += 1;

    if (currentSlide === 8) {
      disableArrowRight();
      disableTwoArrowRight();
    }

    if (currentSlide > 1) {
      activateArrowLeft();
      activateTwoArrowLeft();
    }
  }

  /* Для разрешения 320 */
  if (document.documentElement.clientWidth < 768){
    sliderOffset = sliderOffset - 320
    currentSlide += 1;

    if (currentSlide === 16) {
      disableArrowRight();
      disableTwoArrowRight();
    }

    if (currentSlide > 1) {
      activateArrowLeft();
      activateTwoArrowLeft();
    }
  }

  petsContentArr.forEach((el) => {
    el.style.left = `${sliderOffset}px`;

    petsNavNumber.firstChild.textContent = currentSlide;
  })



});

twoArrowRight.addEventListener('click', function() {
  /* Для разрешения 1280 */
  if (document.documentElement.clientWidth >= 1280){
    sliderOffset = -6400;
    currentSlide = 6;
  }
  /* Для разрешения 768 */
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
    sliderOffset = -5376;
    currentSlide = 8;
  }
  /* Для разрешения 320 */
  if (document.documentElement.clientWidth < 768){
    sliderOffset = -4800;
    currentSlide = 16;
  }


  petsContentArr.forEach((el) => {
    el.style.left = `${sliderOffset}px`;

    petsNavNumber.firstChild.textContent = currentSlide;
  })

  disableArrowRight();
  disableTwoArrowRight();
  activateArrowLeft();
  activateTwoArrowLeft();
})

arrowLeft.addEventListener('click', function() {
  /* Для разрешения 1280 */
  if (document.documentElement.clientWidth >= 1280){
    sliderOffset = sliderOffset + 1280
    currentSlide -= 1;

    if (currentSlide < 6 && arrowRight.hasAttribute("disabled")) {
      activateArrowRight();
      activateTwoArrowRight();

    }

    if (currentSlide === 1) {
      disableArrowLeft();
      disableTwoArrowLeft()
    }
  }
  /* Для разрешения 768 */
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
    sliderOffset = sliderOffset + 768
    currentSlide -= 1;

    if (currentSlide < 8 && arrowRight.hasAttribute("disabled")) {
      activateArrowRight();
      activateTwoArrowRight();

    }

    if (currentSlide === 1) {
      disableArrowLeft();
      disableTwoArrowLeft()
    }
  }
  /* Для разрешения 320 */
  if (document.documentElement.clientWidth < 768){
    sliderOffset = sliderOffset + 320
    currentSlide -= 1;

    if (currentSlide < 16 && arrowRight.hasAttribute("disabled")) {
      activateArrowRight();
      activateTwoArrowRight();

    }

    if (currentSlide === 1) {
      disableArrowLeft();
      disableTwoArrowLeft()
    }
  }


  petsContentArr.forEach((el) => {
    el.style.left = `${sliderOffset}px`;

    petsNavNumber.firstChild.textContent = currentSlide;
  })

})

twoArrowLeft.addEventListener('click', function() {
  /* Для разрешения 1280 */
  if (document.documentElement.clientWidth >= 1280){
    sliderOffset = 0;
  currentSlide = 1;
  }
  /* Для разрешения 768 */
  if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
    sliderOffset = 0;
    currentSlide = 1;
  }
  /* Для разрешения 320 */
  if (document.documentElement.clientWidth < 768){
    sliderOffset = 0;
    currentSlide = 1;
  }


  petsContentArr.forEach((el) => {
    el.style.left = `${sliderOffset}px`;

    petsNavNumber.firstChild.textContent = currentSlide;
  })

  disableArrowLeft();
  disableTwoArrowLeft()
  activateArrowRight();
  activateTwoArrowRight();

})

}

export default paginationEngine;