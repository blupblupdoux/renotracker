const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
  _projectId: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  stock: {type: Number, default: 1},
  unit: {type: String, required: false},
  shop: {type: String, required: false},
  purchased_at: {type: Date, required: false},
  note: {type: String, required: false},
}, {timestamps: true})

purchaseSchema.statics.getProductForSubProjectWithPivot = async function (subProjectId) {
  return await this.aggregate([
    { $lookup: {from: 'subprojectpurchases', localField: '_id', foreignField: '_purchaseId', as: 'pivot'}},
    { $unwind: '$pivot' },
    { $match: { 'pivot._subProjectId': new mongoose.Types.ObjectId(subProjectId) } },
    { $project: {
      _id: 1,
      _projectId: 1,
      name: 1,
      stock: '$quantity',
      quantity: '$pivot.quantity',
      price: 1,
      purchased_at: 1,
    }},
  ])
}

module.exports = mongoose.model('Purchase', purchaseSchema)