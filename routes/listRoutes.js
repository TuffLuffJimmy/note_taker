// allows us to use a separate routes file for cleaner code
const router = require('express').Router()
// constructor for reading and writing note files
const Note = require('../Note.js')
// json database
const db = require('../db/db.json')
// used to read and write json database
const { readFile, writeFile } = require('fs')
// promise based read and write files
const { promisify } = require('util')
const readFileSync = promisify(readFile)
const writeFileSync = promisify(writeFile)
// default construction for note object
const note = new Note()
const dbLocation = '../db/db.json'
let noteId = 0

// responds with json db
router.get('./api/notes', (req, res) => {
  console.log(req.body)
  res.json(db)
})

router.post('./api/notes', (req, res) => {
  console.log(req.body)
  const title = req.body.title
  const text = req.body.text
  db.push(title,text,noteId)
  noteId++
  writeFileSync(dbLocation, JSON.stringify(db))
    .then (res => console.log(res))
    .catch(err => console.log(err))

})

router.put('./api/notes', (req, res) => {

})

router.delete('./api/notes:id', (req, res) => {
  db.splice(req.param.id,1)
  // db.forEach((item) => {
  //   if (item.id === parseInt(req.param.id))
  // })
  db.forEach((item) => {
    if (item.id === parseInte(req.param.id)) {
      db.pop(item)
    }
  })
  writeFileSync(dbLocation, JSON.stringify(db))
    .then(res => console.log(res))
    .catch(err => console.log(err))

})

module.exports = router