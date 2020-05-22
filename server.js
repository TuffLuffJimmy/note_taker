// const http = require('http')
const express = require('express')
const { join } = require('path')
const app = express()
// const server = http.createServer()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//app.use(require('./routes/listRoutes.js'))
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'notes.html'))
})
app.listen(3000, () => console.log('http://localhost:3000'))