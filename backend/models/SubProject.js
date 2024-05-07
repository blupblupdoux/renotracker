const mongoose = require('mongoose')

const subProjectSchema = mongoose.Schema({
  _projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
  name: {type: String, required: true},
  description: {type: String, required: false},
  budget: {type: Number, required: false},
  priority: {type: Number, required: false},
  status: {type: Number, required: true, default: 0},
}, {timestamps: true})

module.exports = mongoose.model('SubProject', subProjectSchema)