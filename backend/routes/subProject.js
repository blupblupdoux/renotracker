const express = require('express')
const router = express.Router()

const subProjectController = require('../controllers/SubProject')
const subProjectPurchaseController = require('../controllers/SubProjectPurchase')

router.get('/project/:projectId/all', subProjectController.all)
router.get('/:id', subProjectController.findOne)
router.post('/create', subProjectController.create)

// Sub-project Purchase relation
router.post('/purchase/attach', subProjectPurchaseController.attach)
router.post('/purchase/detach', subProjectPurchaseController.detach)

module.exports = router