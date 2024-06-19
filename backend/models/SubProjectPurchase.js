const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const subProjectPurchaseSchema = mongoose.Schema({
  _subProjectId: {type: ObjectId, ref: 'SubProject', required: true},
  _purchaseId: {type: ObjectId, ref: 'Purchase', required: true},
  quantity: {type: Number, default: 0},
}, {timestamps: true})

module.exports = mongoose.model('SubProjectPurchase', subProjectPurchaseSchema)