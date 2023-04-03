const express = require('express')
const router = express.Router();
const projects = require('../controllers/projects.controllers')

router.get('/projects', projects.list);
router.post('/projects', projects.create);
router.get('/projects/:id', projects.detail);
router.delete('/projects/:id', projects.delete);
router.patch('/projects/:id', projects.update)

module.exports = router;