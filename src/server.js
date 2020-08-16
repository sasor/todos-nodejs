const express = require('express')
const path = require('path')
const app = express()

// Settings
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(express.urlencoded({extended: false}))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send({sucess: true})
})
module.exports = app
