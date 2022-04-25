import allPets from '../../../assets/pets.js';

const modalWindowEngine = () => {

  const body = document.querySelector("body");

  const opacityWindow = document.querySelector(".opacity-window");

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
      modalName.innerText = allPets[cardIndex].name;
      modalType.innerText = allPets[cardIndex].type;
      modalBreed.innerText = allPets[cardIndex].breed;
      modalDescription.innerText = allPets[cardIndex].description;

      modalListAge.innerText = allPets[cardIndex].age;
      modalListInoculations.innerText = allPets[cardIndex].inoculations.join(", ");
      modalListDiseases.innerText = allPets[cardIndex].diseases.join(", ");
      modalListParasites.innerText = allPets[cardIndex].parasites.join(", ");
    })
  }

  closeButton.addEventListener('click', function() {
    modalWindow.classList.remove("modal-window_active");
    opacityWindow.classList.remove("opacity-window_active");
    body.classList.remove("body_no_scroll");
  })

  opacityWindow.addEventListener('click', function() {
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
}

export default modalWindowEngine;