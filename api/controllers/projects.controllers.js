const Project = require('../models/project.model')
const createError = require('http-errors')


module.exports.list = (req, res, next) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch(next)
}

module.exports.create = (req, res, next) => {  
  Project.create(req.body)
    .then((project) => res.status(201).json(project))    
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Project.findById(req.params.id)
  .then((project) => {
    if (!project) {
      next(createError(404, 'Project not found'))
    } else {
      res.json(project)
    }
  })
  .catch(next)
}

module.exports.delete = (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
  .then((project) => {
    if (project) {
      res.status(204).send();
    } else {
      next(createError(404, 'Project not found'))
    }
  })
  .catch(next)
}

module.exports.update = (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
  .then((project) => {
    if (project) {
      res.json(project);
    } else {
      next(createError(404, 'Project not found'))
    }
  })
  .catch(next)
}
