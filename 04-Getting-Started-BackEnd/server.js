const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('src/views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res, next) => {
  const about = {
    avatar: "https://pbs.twimg.com/profile_images/1126262886756691974/TcDvOQ3Q_400x400.png",
    username: "tr3visan",
    name: "Wagner Trevisan",
    role: "FrontEnd Developer",
    description: "Looking to be better than it was yesterday",
    social: [
      { name: "github", url: "https://github.com/"},
      { name: "twitter", url: "https://twitter.com/"},
      { name: "linkedin", url: "https://www.linkedin.com/in/"}
    ]
  }
  return res.render('about', { about })
})

server.get('/portfolio', (req, res, next) => {
  return res.render('portfolio', { items: videos })
})

server.get('/video', (req, res, next) => {
  const id = req.query.id
  const video = videos.find(function(video) {
    return video.id === id
  })
  if(!video) {
    return res.send('Video not found')
  }
  return res.render('video', { item: video })
})

server.listen(5000, () => {
  console.log('Server is running: http://localhost:5000')
})