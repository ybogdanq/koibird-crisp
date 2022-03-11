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

function getSlidesToShow(currentWidth) {
  let responsiveKey = null;
  const responsive = getResponsive(currentWidth);
  Object.entries(responsive).map(([key, value]) => {
    if (value === true) responsiveKey = key;
  });
  return responsiveKey;
}

function getResponsive(currentWidth) {
  return {
    [4]: currentWidth > 768,
    [3]: currentWidth <= 768 && currentWidth >= 550,
    [2]: currentWidth <= 550 && currentWidth >= 425,
    [1]: currentWidth <= 425,
  };
}
