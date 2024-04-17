const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  _userId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}],
  name: {type: String, required: true},
  description: {type: String, required: false},
  budget: {type: Number, required: false},
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)