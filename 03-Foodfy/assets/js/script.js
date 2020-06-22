const btnClose = document.querySelector('.btn-close')
const modalContent = document.querySelector('.modal-content')
const cards = document.querySelectorAll('.card')

function closeModal(e) {
  e.preventDefault()
  modalContent.classList.remove('active')
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    let id = card.getAttribute('data-type')
    let title = card.querySelector('h4').textContent
    let cheff = card.querySelector('h5').textContent
    modalContent.classList.add('active')
    modalContent.querySelector('img').setAttribute('src', `assets/img/${id}.png`)
    modalContent.querySelector('h2').textContent = title
    modalContent.querySelector('h5').textContent = cheff
  })
})

btnClose.addEventListener('click', closeModal)
