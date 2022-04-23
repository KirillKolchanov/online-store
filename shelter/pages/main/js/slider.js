import allPets from '../../../assets/pets.js';

const petsContentArr = document.querySelector(".pets-card-content");
const petCardArr = petsContentArr.querySelectorAll(".pet-card");

function shuffleArr(array) {
  return array.sort(() => Math.random() - 0.5);
}

const sliderEngine = () => {

  const shuffledAllPets = shuffleArr(allPets);

  for (let i = 0; i < petCardArr.length; i++) {
    petCardArr[i].dataset.id = i;
    petCardArr[i].firstElementChild.src = shuffledAllPets[i].img;
    petCardArr[i].children[1].textContent = shuffledAllPets[i].name;
  }
}

export default sliderEngine;