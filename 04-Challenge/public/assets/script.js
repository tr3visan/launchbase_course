const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', e => {
    let videoId = card.getAttribute('id')
    window.location.href = `/courses/${videoId}`
  })
}
