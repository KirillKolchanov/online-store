import allPets from '../../../assets/pets.js';
import modalWindowEngine from './modalWindow.js'

const petsContentArr = document.querySelectorAll(".pets-card-content");

const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");

const CAROUSEL = document.querySelector("#carousel");

const ITEM_LEFT = document.querySelector("#cards-leftPage");
const ITEM_RIGHT = document.querySelector("#cards-rightPage");
const ITEM_ACTIVE = document.querySelector("#item-active");


function shuffleArr(array) {
  return array.sort(() => Math.random() - 0.5);
}

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("pet-card");
  return card;
}

const sliderEngine = () => {

  /* Заполнение ITEM ACTIVE карточками случайным образом */
    function fillPetsItems(){
      /* Заполнение ITEM ACTIVE карточками случайным образом */
      const activePetsItemArr = ITEM_ACTIVE.querySelectorAll(".pet-card");
      let shuffledAllPets = [...shuffleArr(allPets)];
      for (let i = 0; i < activePetsItemArr.length; i++) {
        activePetsItemArr[i].firstElementChild.src = shuffledAllPets[i].img;
        activePetsItemArr[i].children[1].textContent = shuffledAllPets[i].name;
      }
    }

    fillPetsItems();

    /* Заполнение ITEM RIGHT/LEFT карточками случайным образом */
    function fillRightLeftItem(whatITEM) {
      let shuffledAllPets = [...shuffleArr(allPets)];
      const activePetsItemArr = ITEM_ACTIVE.querySelectorAll(".pet-card");
      for (let i = 0; i < activePetsItemArr.length; i++) {
        for (let j = 0; j < shuffledAllPets.length; j++) {
          if (activePetsItemArr[i].children[1].textContent === shuffledAllPets[j].name) {
            shuffledAllPets.splice(j,1);
          }
        }
      }
      const item = whatITEM.querySelectorAll(".pet-card");
      for (let i = 0; i < item.length; i++) {
        item[i].firstElementChild.src = shuffledAllPets[i].img;
        item[i].children[1].textContent = shuffledAllPets[i].name;
      }
      //console.log(shuffledAllPets);
    }

  const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    arrowLeft.removeEventListener("click", moveLeft);
    arrowRight.removeEventListener("click", moveRight);

    fillRightLeftItem(ITEM_LEFT);
  };

  const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    arrowLeft.removeEventListener("click", moveLeft);
    arrowRight.removeEventListener("click", moveRight);

    fillRightLeftItem(ITEM_RIGHT);
  };

  arrowLeft.addEventListener("click", moveLeft);
  arrowRight.addEventListener("click", moveRight);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      changedItem = ITEM_LEFT;
      ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    } else {
      CAROUSEL.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
    }

  const cardTemplate = `<img src="" alt="#"><h4 class="pet-card-title"></h4><div class="pet-card-button-wrapper"><button class="pet-card-button">Learn more</button></div>`

    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card = createCardTemplate();
      card.innerHTML = cardTemplate;
      changedItem.appendChild(card);
    }

    arrowLeft.addEventListener("click", moveLeft);
    arrowRight.addEventListener("click", moveRight);
    modalWindowEngine();
  })

}

export default sliderEngine;