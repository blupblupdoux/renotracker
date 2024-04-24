const Project = require('../models/Project')

exports.create = async (req, res, next) => {
  try {
    delete req.body._id
    const project = new Project(req.body)
    await project.save()
    res.status(201).json({message: 'Project created!'})
  } catch (error) {
    res.status(500).json({error})
  }
}