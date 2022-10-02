const express = require('express')
const app = express()
const port = 9000

// connect todatabase
const db = require('./config/database')

// bring ejs template
app.set('view engine', 'ejs')

//bring static
app.use(express.static('public'))
app.use(express.static('node_modules'))


app.get('/', (req, res) => {
  res.send('Good Connection')
})

// bring routers
const events = require('./routes/events-routes.js')
app.use('/events', events)

// connect to port------use nodemon app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})