const navLink = document.querySelectorAll('.nav-link')
for (const navLinks of navLink) {
  navLinks.addEventListener('click', function (event) {
    document.getElementById('menu-btn').click()
  })
}
