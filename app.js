const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const path = require('path')
const app = express()

const port = process.env.PORT || 3000


app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Galvanize Secrets'
  }),
  console.log('get sent')
})

// app.get('/create', (req, res, next) => {
//
// })

require('dotenv').config()

app.listen(port, (req, res, next) => {
  console.log('listening on port', port)
})
