;(() => {
  const searchParams = new URLSearchParams(window.location.search)
  const email = searchParams.get('email')
  const domName = document.querySelector('#email')

  if (domName) {
    domName.textContent = 'The email ' + email + ' will be notified once it becomes available.'
  }
})()
