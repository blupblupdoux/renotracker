const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth')
const userController = require('../controllers/User')

router.get('/current', authMiddleware, userController.getCurrentUser )

module.exports = router