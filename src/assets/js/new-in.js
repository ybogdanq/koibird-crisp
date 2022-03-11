const clientWidth = window.innerWidth;

const slidesToShow = getSlidesToShow(clientWidth);

slider(
  ".new-in__slider__card",
  ".new-in__prev-arrow",
  ".new-in__next-arrow",
  1,
  slidesToShow
);

window.addEventListener("resize", () => {
  const newSlidesToShow = getSlidesToShow(window.innerWidth);
  slider(
    ".new-in__slider__card",
    ".new-in__prev-arrow",
    ".new-in__next-arrow",
    1,
    newSlidesToShow
  );
});