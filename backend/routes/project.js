const express = require('express')
const router = express.Router()

const projectController = require('../controllers/Project')

router.get('/', projectController.all)
router.get('/:id', projectController.findOne)
router.post('/create', projectController.create)

module.exports = router