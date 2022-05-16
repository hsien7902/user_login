const express = require('express')
const app = express()
const Port = 3000
const exphbs = require('express-handlebars')
const { mainModule } = require('process')

//app.use
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.use('view engine', 'hbs')

//Routers

app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

//listener
app.listen(Port, () => {
  console.log(`this app is running on http://localhost:${Port}`)
})