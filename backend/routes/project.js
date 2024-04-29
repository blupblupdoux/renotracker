const express = require('express')
const router = express.Router()

const projectController = require('../controllers/Project')

router.get('/all', projectController.all)
router.post('/create', projectController.create)

module.exports = router