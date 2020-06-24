const cards = document.querySelectorAll('.card')

function effectDelayCards() {
  let minimo = 0, max = cards.length
  const timer = setInterval(() => {
    cards[minimo].classList.add('anime')
    minimo++ 
    if(minimo === max) clearInterval(timer)
  }, 200);
}

window.addEventListener('load', effectDelayCards)

cards.forEach(card => {  
  card.addEventListener('click', () => {
    let id = card.getAttribute('data-index')
    window.location.href = `/receitas/${id}`
  })
})

const btn = document.querySelectorAll('.btn')
btn.forEach(btn => {
  btn.addEventListener('click', e => {
    let btnEl = e.target.parentElement
    let elID = e.target.parentElement.getAttribute('data-id')
    let elContent = document.querySelector(`#${elID}`)
    if (elContent.style.maxHeight){
      btnEl.querySelector('span').textContent = 'Ver mais'
      btnEl.querySelector('.material-icons').textContent = 'keyboard_arrow_down'
      elContent.style.maxHeight = null;
    } else {
      btnEl.querySelector('span').textContent = 'Ver menos'
      btnEl.querySelector('.material-icons').textContent = 'keyboard_arrow_up'
      elContent.style.maxHeight = elContent.scrollHeight + "px";
    } 
  })
})

