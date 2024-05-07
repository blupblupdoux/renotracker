const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
  _projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: false},
  unit: {type: String, required: false},
  shop: {type: String, required: false},
  purchased_at: {type: Date, required: false},
  note: {type: String, required: false},
}, {timestamps: true})

module.exports = mongoose.model('Purchase', purchaseSchema)