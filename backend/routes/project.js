const express = require('express')
const router = express.Router()

const projectController = require('../controllers/Project')

router.post('/create', projectController.create)

module.exports = router