
window.addEventListener("load", () => {
  setTimeout(() => document.body.classList.add("loaded"), 300);
});

const form = document.getElementById("signup-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (form.checkValidity()) {
    successMessage.classList.add("show");
    form.reset();
  }
});
