function darkMode() {
  let body = document.body;
  let banner = document.querySelector(".banner");
  let plansContainer = document.querySelector(".plans-container");
  let subscribeContainer = document.querySelector(".subscribe-container");
  let email = document.querySelector(".email");
  let pElement = document.querySelectorAll(".faq-qa-elements > p");
  let successText = document.querySelector(".success-text");

  if (
    body &&
    banner &&
    plansContainer &&
    subscribeContainer &&
    email &&
    pElement
  ) {
    body.classList.toggle("dark-mode");
    banner.classList.toggle("dark-mode-container");
    plansContainer.classList.toggle("dark-mode-container");
    subscribeContainer.classList.toggle("dark-mode-card");
    email.classList.toggle("dark-mode-input");
    pElement.forEach((pElement) => pElement.classList.toggle("dark-mode-p"));
  } else if (successText) {
    successText.classList.toggle("dark-mode-container");
  }
}
