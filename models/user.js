const mongoose = require('mongoose')
const schema = mongoose.Schema
const userSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requred: true,
  }
})

module.exports = mongoose.model('user', userSchema)