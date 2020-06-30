const currentPage = location.pathname
const links = document.querySelectorAll('.nav-links .links a')

links.forEach(link => {
  if(currentPage.includes(link.getAttribute('href'))) {
    link.setAttribute('class', 'active')
  }
})