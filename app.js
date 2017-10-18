const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 3000

app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.listen(port, (req, res, next) => {
  console.log('listening on port', port)
})
