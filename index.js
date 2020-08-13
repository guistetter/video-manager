const express = require("express")
const nunjucks = require('nunjucks')

const PORT = process.env.PORT || 3000
const server = express()
const videos = require('./data')

server.set("view engine", "njk")
nunjucks.configure('views',{
  express:server,
  noCache: true,
  autoescape: false
})

server.use(express.static("public"))

server.get('/', (req,res) => {
  const about = {
    img_name: "imagem2.jpg",
    name: "Guilherme Stetter",
    role: "Bug Maker and Pusher",
    description: "Colaborar na blablablblablablabla",
    links:[
      {name: "GitHub", url:"https://google.com.br"},
      {name: "Twitter", url:"https://google.com.br"},
      {name: "Facebook", url:"https://google.com.br"},
    ]
  }
  res.render('about', {about})
})

server.get('/portfolio', (req,res) => {
  res.render('portfolio',{items: videos})
})

server.get('/video', (req,res) => {
  const id = req.query.id 
  
  const video = videos.find(function(video){
      if(video.id == id){
        return true;
      }
  })
  if(!video){
    return res.send('video nao encontrado')
  }
  return res.render('video',{video})
})

server.listen(PORT, () =>{
  console.log('running PORT: ', PORT)
})