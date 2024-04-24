const express = require('express')
const router = express.Router()

const userController = require('../controllers/User')

router.get('/current', userController.getCurrentUser )

module.exports = router