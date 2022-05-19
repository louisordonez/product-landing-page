(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email");
  console.log(email);
  const domName = document.querySelector("#email");
  console.log(domName);

  if (domName) {
    domName.textContent = "The email" + email + " will be notified.";
  }
})();
