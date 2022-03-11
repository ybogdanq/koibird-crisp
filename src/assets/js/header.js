const burgerMenu = document.querySelector(".header__burger-menu");
const expandLinks = document.querySelectorAll("[data-expand]");
const burgerMenuOpenBtn = document.querySelector(".header__burger_open");
const burgerMenuCloseBtn = document.querySelector(".header__burger_close");
const searchBtn = document.querySelector(".search__button");
const searchWrapper = document.querySelector(".header__search");
const body = document.body;
let currentEl = null;

document.addEventListener("DOMContentLoaded", () => {
  if (document.documentElement.clientWidth <= 768) {
    onMinResizeHandler();
  }
  window.addEventListener("resize", (e) => {
    if (document.documentElement.clientWidth <= 768) {
      onMinResizeHandler();
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
