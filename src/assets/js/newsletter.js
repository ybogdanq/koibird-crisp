const form = document.forms["newsLetter"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = form.newsLetterInput.value;
  if (form.newsLetterSubscription.checked) {
    alert(`Your message send \nMessage: ${message}`);
  } else {
    alert("Checkbox must be checked");
  }
});
