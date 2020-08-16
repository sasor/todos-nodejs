const {Schema, model} = require('mongoose')

module.exports = model('Note', new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
}, {
  timestamps: true
}))
