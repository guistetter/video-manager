const express = require("express")
const server = express()
const PORT = process.env.PORT || 3000

server.get('/', (req,res) => {
  res.send('Olá mundo')
})

server.listen(PORT, () =>{
  console.log('running PORT: ', PORT)
})