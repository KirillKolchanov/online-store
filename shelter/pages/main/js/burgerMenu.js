const body = document.querySelector("body");

const opacityWindow = document.querySelector(".opacity-window");

const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const headerLogo = document.querySelector(".header-logo");
const navAbout = document.querySelector(".nav-about");
const navHelp = document.querySelector(".nav-help");
const navContact = document.querySelector(".nav-contact");

const burgerEngine = () => {

  burgerMenu.addEventListener('click', function() {
    body.classList.toggle("body_no_scroll");
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

  opacityWindow.addEventListener('click', function() {

    burgerMenu.classList.remove("burger-menu_active");
    header.classList.remove("header_active");
    nav.classList.remove("nav_active");

    opacityWindow.classList.remove("opacity-window_active");
    body.classList.remove("body_no_scroll");
  })
}

export default burgerEngine;