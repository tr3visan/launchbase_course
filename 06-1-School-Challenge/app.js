const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const app = express()

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)

app.set('view engine', 'njk')

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true
})

app.listen(5000, () => {
  console.log('Server is running http://localhost:5000')
})