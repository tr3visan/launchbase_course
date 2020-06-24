const express = require('express')
const nunjucks = require('nunjucks')
const recipies = require('./data/recipies')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true
})

app.get('/', (req, res) => {
  return res.render('home', { recipies })
})

app.get('/sobre', (req, res) => {
  return res.render('sobre')
})

app.get('/receitas', (req, res) => {
  return res.render('receitas', { recipies })
})

app.get("/receitas/:index", function (req, res) {
  const recipesArray = recipies; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;
  const receita = recipesArray[recipeIndex]

  return res.render('receita', { item: receita })
})

app.use((req, res) => {
  return res.status(404).render('not-found')
})

app.listen(5000, () => {
  console.log('Server is running http://localhost:5000')
})