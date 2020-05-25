// const http = require('http')
// const server = http.createServer()

// server framework
const express = require('express')
// shorthand path writing tool
const { join } = require('path')
// allows us to use express, but with dot notation
const app = express()


// boilerplate? Should be in all express servers?
app.use(express.static(join(__dirname, 'public'))) // this line takes us to the index page within public folder?
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(require('./routes/listRoutes.js'))

// takes us to notes page within public folder
app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'notes.html'))
})

// starts server
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))