const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const subProjectPurchaseSchema = mongoose.Schema({
  _subProjectId: {type: ObjectId, ref: 'SubProject', required: true},
  _purchaseId: {type: ObjectId, ref: 'Purchase', required: true},
  quantity: {type: Number, default: 0},
}, {timestamps: true})

subProjectPurchaseSchema.statics.getProductIds = async function(subProjectId) {
  const queryResult = await this.aggregate([
    { $match: {_subProjectId: new mongoose.Types.ObjectId(subProjectId)} },
    { $project: {_id: 0, _purchaseId: 1}},
    { $group: { _id: null, ids: { $push: '$_purchaseId' } } },
  ]);

  return queryResult.length > 0 ? queryResult[0].ids : [];
}

module.exports = mongoose.model('SubProjectPurchase', subProjectPurchaseSchema)