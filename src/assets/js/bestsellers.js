const clientWidth = window.innerWidth;

const slidesToShow = getSlidesToShow(clientWidth);

slider(
  ".bestsellers__slider__card",
  ".bestsellers__prev-arrow",
  ".bestsellers__next-arrow",
  1,
  slidesToShow
);

window.addEventListener("resize", () => {
  const newSlidesToShow = getSlidesToShow(window.innerWidth);
  slider(
    ".bestsellers__slider__card",
    ".bestsellers__prev-arrow",
    ".bestsellers__next-arrow",
    1,
    newSlidesToShow
  );
});
