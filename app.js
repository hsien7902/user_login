const express = require('express')
const app = express()
const Port = 3000
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')

//mongoose connection
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})

//app.use
app.engine('.hbs', exhbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')



//Routers

app.get('/', (req, res) => {
  res.render('index')
})

//listener
app.listen(Port, () => {
  console.log(`this app is running on http://localhost:${Port}`)
})