const express = require('express')
const router = express.Router()

const subProjectController = require('../controllers/SubProject')

router.get('/all', subProjectController.all)

module.exports = router