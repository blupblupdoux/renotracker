const SubProject = require('../models/SubProject')

exports.all = (req, res, next) => {
  SubProject.find({_projectId: req.params.projectId})
    .then(subProjects => res.status(200).json(subProjects))
    .catch(error => res.status(400).json({ error }));
}

exports.findOne = (req, res, next) => {
  SubProject.findOne({_id:  req.params.id})
    .then(subProject => res.status(200).json(subProject))
    .catch(error => res.status(400).json({ error }));
}

exports.create = (req, res, next) => {
  delete req.body._id
  const subProject = new SubProject(req.body)
  subProject.save()
    .then(() => res.status(200).json(subProject))
    .catch(error => res.status(500).json({ error }));
}