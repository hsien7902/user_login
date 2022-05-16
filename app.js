const express = require('express')
const app = express()
const Port = 3000
const exhbs = require('express-handlebars')


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