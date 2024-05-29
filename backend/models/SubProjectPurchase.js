const mongoose = require('mongoose')

const subProjectPurchaseSchema = mongoose.Schema({
  _subProjectId: {type: mongoose.Schema.Types.ObjectId, ref: 'SubProject', required: true},
  _purchaseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true},
  quantity: {type: Number, default: 0},
}, {timestamps: true})

module.exports = mongoose.model('SubProjectPurchase', subProjectPurchaseSchema)