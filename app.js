const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = express()

const port = process.env.PORT || 3000

require('dotenv').config()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.render('index')
  console.log('get sent')
})


app.listen(port, (req, res, next) => {
  console.log('listening on port', port)
})
