const Purchase = require('../models/Purchase')

exports.create = (req, res, next) => {
  delete req.body._id
  const purchase = new Purchase(req.body)
  purchase.save()
    .then(() => res.status(200).json(purchase))
    .catch(error => res.status(500).json({ error }));
}