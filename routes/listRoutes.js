// allows us to use a separate routes file for cleaner code
const router = require('express').Router()
// constructor for reading and writing note files
//const Note = require('../Note.js')
// json database
const db = require('../db/db.json')
// used to read and write json database
const { readFile, writeFile } = require('fs')
// promise based read and write files
const { promisify } = require('util')
const readFileSync = promisify(readFile)
const writeFileSync = promisify(writeFile)
// default construction for note object
//const note = new Note()
const dbLocation = '../db/db.json'
const { join } = require('path')
let noteId = 2

function readDB () {
  
}
// responds with json db
router.get('/api/notes', (req, res) => {
  readFileSync(join(__dirname, '../db/db.json'), 'utf8')
    .then(dbres => {
      const response = JSON.parse(dbres)
      console.log(response)
      res.json(JSON.parse(dbres))
    })  
})

router.post('/api/notes', (req, res) => {
  console.log(req.body)
  const title = req.body.title
  const text = req.body.text
  //read database and THEN push to it and then writeFileSync
  db.push({title,text,id: noteId})
  noteId++
  writeFileSync(join(__dirname, '../db/db.json'), JSON.stringify(db))
    .then (res => console.log(res))
    .catch(err => console.log(err))

})

router.put('/api/notes', (req, res) => {

})

router.delete('/api/notes/:id', (req, res) => {
  db.splice(req.param.id,1)
  // db.forEach((item) => {
  //   if (item.id === parseInt(req.param.id))
  // })
  db.forEach((item) => {
    if (item.id === parseInt(req.param.id)) {
      db.pop(item)
    }
  })
  writeFileSync(dbLocation, JSON.stringify(db))
    .then(res => console.log(res))
    .catch(err => console.log(err))

})

module.exports = router