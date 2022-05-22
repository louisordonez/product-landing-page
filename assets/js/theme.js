let dataThemeAttribute = document.querySelector("[data-theme]");
let dataThemeItem = localStorage.getItem("data-theme");
let body = document.body;
let banner = document.querySelector(".banner");
let plansContainer = document.querySelector(".plans-container");
let subscribeContainer = document.querySelector(".subscribe-container");
let emailInput = document.querySelector(".email");
let pElement = document.querySelectorAll(".faq-qa-elements > p");
let successText = document.querySelector(".success-text");

if (dataThemeAttribute.getAttribute("data-theme") === "") {
  dataThemeAttribute.setAttribute("data-theme", "light");
}

if (dataThemeItem !== 0) {
  if (dataThemeItem === "light") {
    dataThemeAttribute.setAttribute("data-theme", "light");
    setToLightMode();
  } else if (dataThemeItem === "dark") {
    dataThemeAttribute.setAttribute("data-theme", "dark");
    setToDarkMode();
  }
}

function setTheme() {
  addFadeClass();
  if (dataThemeAttribute.getAttribute("data-theme") === "light") {
    dataThemeAttribute.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    setToDarkMode();
  } else if (dataThemeAttribute.getAttribute("data-theme") === "dark") {
    dataThemeAttribute.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
    setToLightMode();
  }
}

function setToDarkMode() {
  body.classList.add("dark-mode");
  if (
    banner &&
    plansContainer &&
    subscribeContainer &&
    emailInput &&
    pElement
  ) {
    banner.classList.add("dark-mode-container");
    plansContainer.classList.add("dark-mode-container");
    subscribeContainer.classList.add("dark-mode-card");
    emailInput.classList.add("dark-mode-input");
    pElement.forEach((pElement) => pElement.classList.add("dark-mode-p"));
  } else if (successText) {
    successText.classList.add("dark-mode-card");
  }
}

function setToLightMode() {
  body.classList.remove("dark-mode");
  if (
    banner &&
    plansContainer &&
    subscribeContainer &&
    emailInput &&
    pElement
  ) {
    banner.classList.remove("dark-mode-container");
    plansContainer.classList.remove("dark-mode-container");
    subscribeContainer.classList.remove("dark-mode-card");
    emailInput.classList.remove("dark-mode-input");
    pElement.forEach((pElement) => pElement.classList.remove("dark-mode-p"));
  } else if (successText) {
    successText.classList.remove("dark-mode-card");
  }
}

function addFadeClass() {
  body.classList.add("fade");
  if (
    banner &&
    plansContainer &&
    subscribeContainer &&
    emailInput &&
    pElement
  ) {
    banner.classList.add("fade");
    plansContainer.classList.add("fade");
    subscribeContainer.classList.add("fade");
    emailInput.classList.add("fade");
    pElement.forEach((pElement) => pElement.classList.add("fade"));
  } else if (successText) {
    successText.classList.add("fade");
  }
}
