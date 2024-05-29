const SubProjectPurchase = require('../models/SubProjectPurchase')

exports.attach = (req, res, next) => {
  SubProjectPurchase.findOneAndUpdate({_subProjectId: req.body._subProjectId, _purchaseId: req.body._purchaseId}, {...req.body}, {new: true, upsert: true})
    .then(pivot => res.status(200).json(pivot))
    .catch(error => res.status(400).json({ error }));
}

exports.detach = (req, res, next) => {
  console.log(req.body)
  res.status(200).json()
}