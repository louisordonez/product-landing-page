const navLink = document.querySelectorAll(".nav-link");
console.log(navLink);
for (const navLinks of navLink) {
  navLinks.addEventListener("click", function (event) {
    document.getElementById("menu-btn").click();
  });
}
