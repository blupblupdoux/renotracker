const SubProject = require('../models/SubProject')

exports.all = (req, res, next) => {
  SubProject.find({_projectId: req.query.projectId})
    .then(subProjects => res.status(200).json(subProjects))
    .catch(error => res.status(400).json({ error }));
}