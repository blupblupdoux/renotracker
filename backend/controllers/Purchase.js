const Purchase = require('../models/Purchase')

exports.all = (req, res, next) => {
  Purchase.find({_projectId: req.query.projectId})
    .then(purchases => res.status(200).json(purchases))
    .catch(error => res.status(400).json({ error }));
}

exports.create = (req, res, next) => {
  delete req.body._id
  if(!req.body.quantity) delete req.body.quantity
  const purchase = new Purchase(req.body)
  purchase.save()
    .then(() => res.status(200).json(purchase))
    .catch(error => res.status(400).json({ error }));
}

exports.updateOne = (req, res, next) => {
  Purchase.findByIdAndUpdate(req.body._id, {...req.body}, {new: true})
    .then((purchase) => res.status(200).json(purchase))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteOne = (req, res, next) => {
  Purchase.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json())
    .catch(error => res.status(400).json({ error }));
}