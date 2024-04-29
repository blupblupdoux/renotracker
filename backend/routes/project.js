const express = require('express')
const router = express.Router()

const projectController = require('../controllers/Project')

router.get('/all', projectController.all)
router.get('/:id', projectController.findOne)
router.post('/create', projectController.create)

module.exports = router