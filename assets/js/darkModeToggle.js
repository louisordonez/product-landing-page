function darkMode() {
  bodyDarkMode();
  bannerDarkMode();
  plansDarkMode();
  subscribeDarkMode();
  inputDarkMode();
  successPageDarkMode();
}

function bodyDarkMode() {
  let element = document.body;
  if (element) {
    element.classList.toggle("dark-mode");
  }
}

function bannerDarkMode() {
  let element = document.querySelector(".banner");
  if (element) {
    element.classList.toggle("dark-mode-container");
  }
}

function plansDarkMode() {
  let element = document.querySelector(".plans-container");
  if (element) {
    element.classList.toggle("dark-mode-container");
  }
}

function subscribeDarkMode() {
  let element = document.querySelector(".subscribe-container");
  if (element) {
    element.classList.toggle("dark-mode-card");
  }
}

function inputDarkMode() {
  let element = document.querySelector(".email");
  if (element) {
    element.classList.toggle("dark-mode-input");
  }
}

function successPageDarkMode() {
  let element = document.querySelector(".success-text");
  if (element) {
    element.classList.toggle("dark-mode-container");
  }
}
