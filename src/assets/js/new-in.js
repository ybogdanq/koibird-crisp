const clientWidth = window.innerWidth;

const slidesToShow = getSlidesToShow(clientWidth); // 4, 3, 2, 1 from a function

slider(
  ".new-in__slider__card",
  ".new-in__prev-arrow",
  ".new-in__next-arrow",
  1,
  slidesToShow
);

window.addEventListener("resize", () => {
  const newSlidesToShow = getSlidesToShow(window.innerWidth); // 4, 3, 2,1 ..
  slider(
    ".new-in__slider__card",
    ".new-in__prev-arrow",
    ".new-in__next-arrow",
    1,
    newSlidesToShow
  );
});