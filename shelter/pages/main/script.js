import allPets from '../../assets/pets.js';

const body = document.querySelector("body");

const opacityWindow = document.querySelector(".opacity-window");

const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const headerLogo = document.querySelector(".header-logo");
const navAbout = document.querySelector(".nav-about");
const navHelp = document.querySelector(".nav-help");
const navContact = document.querySelector(".nav-contact");

const petCards = document.querySelectorAll(".pet-card");
const modalWindow = document.querySelector(".modal-window");
const modalName = document.querySelector(".modal-name");
const modalType = document.querySelector(".modal-type");
const modalBreed = document.querySelector(".modal-breed");
const modalDescription = document.querySelector(".modal-description");
const modalList = document.querySelector(".modal-list");
const modalImg = document.querySelector(".modal-img");
const modalListTitle = document.querySelector(".modal-list-title");

const modalListAge = document.querySelector(".modal-age");
const modalListInoculations = document.querySelector(".modal-inoculations");
const modalListDiseases = document.querySelector(".modal-diseases");
const modalListParasites = document.querySelector(".modal-parasites");

const closeButton = document.querySelector(".close-button");

// console.log(window.innerHeight);

// modalWindow.style.top = Math.round(window.innerHeight / 2 - modalWindow.offsetHeight / 2) + 'px';
// modalWindow.style.left = Math.round(window.innerWidth / 2 - modalWindow.offsetWidth / 2) + 'px';

/* Все что связано с BURGER MENU */

burgerMenu.addEventListener('click', function() {
  body.classList.add("body_no_scroll");
  burgerMenu.classList.toggle("burger-menu_active");
  header.classList.toggle("header_active");
  nav.classList.toggle("nav_active");
  opacityWindow.classList.toggle("opacity-window_active");
});

function closeBurgerMenu() {
  burgerMenu.classList.remove("burger-menu_active");
  header.classList.remove("header_active");
  nav.classList.remove("nav_active");
  opacityWindow.classList.remove("opacity-window_active");
  body.classList.remove("body_no_scroll");
}

headerLogo.addEventListener('click', closeBurgerMenu);
navAbout.addEventListener('click', closeBurgerMenu);
navHelp.addEventListener('click', closeBurgerMenu);
navContact.addEventListener('click', closeBurgerMenu);

/* Все что связано с MODAL WINDOW */

for (let petCard of petCards) {
  petCard.addEventListener('click', function() {

    body.classList.add("body_no_scroll");

    opacityWindow.classList.toggle("opacity-window_active");
    modalWindow.classList.add("modal-window_active");
    const petCardTitle = petCard.querySelector(".pet-card-title")
    let cardName = petCardTitle.innerHTML;

    function findIndexOfCard(name) {
      for (let i = 0; i < allPets.length; i++) {
        if (allPets[i].name === name) {
          return i;
        }
      }
    }

    let cardIndex = findIndexOfCard(cardName);

    modalImg.src = allPets[cardIndex].img;
    modalName.innerHTML = allPets[cardIndex].name;
    modalType.innerHTML = allPets[cardIndex].type;
    modalBreed.innerHTML = allPets[cardIndex].breed;
    modalDescription.innerHTML = allPets[cardIndex].description;

    modalListAge.innerHTML = allPets[cardIndex].age;
    modalListInoculations.innerHTML = allPets[cardIndex].inoculations.join(", ");
    modalListDiseases.innerHTML = allPets[cardIndex].diseases.join(", ");
    modalListParasites.innerHTML = allPets[cardIndex].parasites.join(", ");
  })
}

closeButton.addEventListener('click', function() {
  modalWindow.classList.remove("modal-window_active");
  opacityWindow.classList.remove("opacity-window_active");
  body.classList.remove("body_no_scroll");
})

opacityWindow.addEventListener('click', function() {
  burgerMenu.classList.remove("burger-menu_active");
  header.classList.remove("header_active");
  nav.classList.remove("nav_active");
  opacityWindow.classList.remove("opacity-window_active");
  body.classList.remove("body_no_scroll");

  modalWindow.classList.remove("modal-window_active");
  opacityWindow.classList.remove("opacity-window_active");
  body.classList.remove("body_no_scroll");
})

opacityWindow.addEventListener('mouseover', function() {
  closeButton.style.backgroundColor = "#FDDCC4"
})

opacityWindow.addEventListener('mouseleave', function() {
  closeButton.style.backgroundColor = ""
})