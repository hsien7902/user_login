const express = require('express')
const app = express()
const Port = 3000
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser')
const { redirect } = require('express/lib/response')

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
app.use(bodyParser.urlencoded({ extended: true }))



//Routers

app.get('/', (req, res) => {
  res.render('index')
})

//user login =>input:email&password,then click "sign in"=>check user data or not
//=>success: return success page or =>error=> return error page

app.post('/users', (req, res) => {
  const { email, password } = req.body
  if (!(email.trim() && password.trim())) {
    return res.redirect('/')
  }
  console.log(`${email}/${password}`)
  return User.findOne({ email: email, password: password })
    .lean()
    .then(data => data ? data : res.render('result', { email })
    )
    .then(data => {
      console.log(data)
      res.render('result', { result: data.firstName })
    })
    .catch(error => console.log(error))
})

//listener
app.listen(Port, () => {
  console.log(`this app is running on http://localhost:${Port}`)
})