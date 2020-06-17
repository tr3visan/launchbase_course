const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const btnClose = document.querySelector('.close-modal')
const iframe = modalOverlay.querySelector('iframe')

for (let card of cards) {
  card.addEventListener('click', e => {
    let videoId = card.getAttribute('id')
    modalOverlay.classList.add('active')
    iframe.src = `https://youtube.com/embed/${videoId}`
  })
}

btnClose.addEventListener('click', e => {
  e.preventDefault()
  modalOverlay.classList.remove('active')
  iframe.src = ''
})
