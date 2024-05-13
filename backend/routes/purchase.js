const express = require('express')
const router = express.Router()

const purchaseController = require('../controllers/Purchase')

router.get('/all', purchaseController.all)
router.post('/create', purchaseController.create)
router.put('/update', purchaseController.updateOne)

module.exports = router