function darkMode() {
  bodyDarkMode();
  bannerDarkMode();
  plansDarkMode();
  subscribeDarkMode();
  faqDarkMode();
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

  function inputDarkMode() {
    let element = document.querySelector(".email");
    if (element) {
      element.classList.toggle("dark-mode-input");
    }
  }

  inputDarkMode();
}

function faqDarkMode() {
  let element = document.querySelectorAll(".faq-qa-elements > p");
  element.forEach((element) => element.classList.toggle("dark-mode-p"));
}

function successPageDarkMode() {
  let element = document.querySelector(".success-text");
  if (element) {
    element.classList.toggle("dark-mode-container");
  }
}
