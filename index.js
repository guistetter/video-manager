const express = require("express")
const nunjucks = require('nunjucks')

const PORT = process.env.PORT || 3000
const server = express()

server.set("view engine", "njk")
nunjucks.configure('views',{
  express:server
})

server.use(express.static("public"))

server.get('/', (req,res) => {
  res.render('about')
})

server.get('/portfolio', (req,res) => {
  res.render('portfolio')
})

server.listen(PORT, () =>{
  console.log('running PORT: ', PORT)
})