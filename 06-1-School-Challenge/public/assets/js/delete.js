const btnDelete = document.querySelector('.delete')

const btnCancel = document.querySelector('.cancel-inline')
const modal = document.querySelector('.modal-content')

btnDelete.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.add('show')
})

btnCancel.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.remove('show')
})