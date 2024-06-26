const express = require('express')
const router = express.Router()

const purchaseController = require('../controllers/Purchase')

router.get('/all', purchaseController.all)
router.post('/create', purchaseController.create)
router.put('/update', purchaseController.updateOne)
router.delete('/:id/delete', purchaseController.deleteOne)

module.exports = router