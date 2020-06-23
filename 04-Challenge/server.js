const express = require('express')
const nunjucks = require('nunjucks')
const about = require('./data/about')
const courses = require('./data/courses')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  return res.render('home', { about })
})

server.get('/courses', (req, res) => {
  return res.render('courses', { items: courses })
})

server.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find(function(item) {
    return item.id === id
  })

  if(!course) return res.status(404).render('not-found')

  return res.render('course', { item: course });
});

server.use((req, res) => {
  res.status(404).render('not-found')
})

server.listen(5001, () => {
  console.log('Server is runnig http://localhost:5001')
})