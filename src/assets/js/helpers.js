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
