const currentPage = location.pathname
const menuitems = document.querySelectorAll('.nav-links .links a')

menuitems.forEach(link => {
  if (currentPage.includes(link.getAttribute('href'))){
    link.setAttribute('class', 'active')
  }
})

