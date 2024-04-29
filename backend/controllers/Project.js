const Project = require('../models/Project')

exports.all = (req, res, next) => {
  Project.find({_userId: req.auth.userId})
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(400).json({ error }));
}

exports.create = async (req, res, next) => {
  delete req.body._id
  const project = new Project(req.body)
  project.save()
    .then(() => res.status(200).json(project))
    .catch(error => res.status(500).json({ error }));
}