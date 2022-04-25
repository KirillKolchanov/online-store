const body = document.querySelector("body");

const opacityWindow = document.querySelector(".opacity-window");

const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const burgerLines = document.querySelectorAll(".burger-line");
const logoTitle = document.querySelector(".logo-title");
const logoDescription = document.querySelector(".logo-description");
const navTextActive = document.querySelector(".nav-text.active");
const navTexts = document.querySelectorAll(".nav-text");
const navPets = document.querySelector(".nav-pets");
const navContact = document.querySelector(".nav-contact");

const burgerEngine = () => {

  burgerMenu.addEventListener('click', function() {

    body.classList.toggle("body_no_scroll");
    burgerMenu.classList.toggle("burger-menu_active");
    header.classList.toggle("header_active");
    nav.classList.toggle("nav_active");
    opacityWindow.classList.toggle("opacity-window_active");

    navPets.addEventListener('click', function() {
      burgerMenu.classList.remove("burger-menu_active");
      header.classList.remove("header_active");
      nav.classList.remove("nav_active");

      opacityWindow.classList.remove("opacity-window_active");

      body.classList.remove("body_no_scroll");
    })

    navContact.addEventListener('click', function() {
      burgerMenu.classList.remove("burger-menu_active");
      header.classList.remove("header_active");
      nav.classList.remove("nav_active");
      opacityWindow.classList.remove("opacity-window_active");

      body.classList.remove("body_no_scroll");
    })
  });

  opacityWindow.addEventListener('click', function() {

    logoDescription.classList.remove("logo-description_active");

    burgerMenu.classList.remove("burger-menu_active");
    header.classList.remove("header_active");
    nav.classList.remove("nav_active");

    opacityWindow.classList.remove("opacity-window_active");
    body.classList.remove("body_no_scroll");
  })
}

export default burgerEngine;