function darkMode() {
  bodyDarkMode();
  successDarkMode();
}

function bodyDarkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

function successDarkMode() {
  let container = document.querySelector(".success-text");
  container.classList.toggle("dark-mode-container");
}
