const express = require('express')
const router = express.Router()

const subProjectController = require('../controllers/SubProject')

router.get('/project/:projectId/all', subProjectController.all)
router.get('/:id', subProjectController.findOne)
router.post('/create', subProjectController.create)

module.exports = router