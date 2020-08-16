const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
}, {
  timestamps: true
})

schema.methods.securePassword = async (password) => {
  return await bcrypt.hash(password, await bcrypt.genSalt(10))
}

schema.methods.validPassword = async (password) => {
  return await bcrypt.compare(password, schema.password)
}

module.exports = model('User', schema)
