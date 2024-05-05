const express = require('express')
const router = express.Router()

const subProjectController = require('../controllers/SubProject')

router.get('/all', subProjectController.all)
router.post('/create', subProjectController.create)

module.exports = router