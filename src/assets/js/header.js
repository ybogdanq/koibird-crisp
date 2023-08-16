const burgerMenu = document.querySelector(".header__burger-menu");
const expandLinks = document.querySelectorAll("[data-expand]");
const burgerMenuOpenBtn = document.querySelector(".header__burger_open");
const burgerMenuCloseBtn = document.querySelector(".header__burger_close");
const searchBtn = document.querySelector(".search__button");
const searchWrapper = document.querySelector(".header__search");
const body = document.body;
let currentEl = null;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener("DOMContentLoaded", () => {
  if (document.documentElement.clientWidth < 768) {
    onMinResizeHandler();
  }
  window.addEventListener("resize", (e) => {
    if (document.documentElement.clientWidth <= 768) {
      onMinResizeHandler();
    }
    if (
      document.documentElement.clientWidth >= 769 &&
      document.documentElement.clientWidth <= 775
    ) {
      document.location.reload();
    }
  });

  burgerMenuOpenBtn.addEventListener("click", () => {
    burgerMenu.classList.add("active");
    body.classList.add("lock-scroll");
  });
  burgerMenuCloseBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    body.classList.remove("lock-scroll");
  });
  searchBtn.addEventListener("click", () => {
    searchWrapper.classList.toggle("active");
  });
});

expandLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const menu = link.querySelector(`.list__item__child`);
    currentEl = e.target;
    menu.classList.add("active");

    document.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target !== currentEl) {
        menu.classList.remove("active");
      }
    });
  });
});

function onMinResizeHandler() {
  const headerElementsToHide = document.querySelectorAll(
    "[data-responsive-hide]"
  );

  headerElementsToHide.forEach((wrapper) => {
    burgerMenu.appendChild(wrapper);
  });
}
