const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('click', () => {
    let videoId = card.getAttribute('id')
    window.location.href = `/video?id=${videoId}`
  })
})
