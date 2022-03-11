const form = document.forms["newsLetter"];
const regExp = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = form.newsLetterInput.value;
  if (form.newsLetterSubscription.checked && regExp.email.test(message)) {
    alert("Successfully signed up to our newsletter");
    form.reset();
  } else {
    alert("Checkbox doesn't checked or invalid email");
  }
});
