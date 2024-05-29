const SubProjectPurchase = require('../models/SubProjectPurchase')

exports.attach = (req, res, next) => {
  SubProjectPurchase.findOneAndUpdate({_purchaseId: req.body._purchaseId, _subProjectId: req.body._subProjectId}, {...req.body}, {new: true, upsert: true})
    .then(pivot => res.status(200).json(pivot))
    .catch(error => res.status(400).json({ error }));
}

exports.detach = (req, res, next) => {
  SubProjectPurchase.deleteOne({_subProjectId: req.body._subProjectId, _purchaseId: req.body._purchaseId})
    .then(() => res.status(200).json())
    .catch(error => res.status(400).json({ error }));
}