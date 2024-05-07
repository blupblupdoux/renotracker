const express = require('express')
const router = express.Router()

const purchaseController = require('../controllers/Purchase')

router.post('/create', purchaseController.create)

module.exports = router