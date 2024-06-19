const express = require('express')
const router = express.Router()

const subProjectController = require('../controllers/SubProject')
const subProjectPurchaseController = require('../controllers/SubProjectPurchase')

router.get('/project/:projectId/subprojects', subProjectController.all)
router.get('/subprojects/:id', subProjectController.findOne)
router.post('/subprojects/create', subProjectController.create)

// Sub-project Purchase relation
router.post('/subprojects/purchases/attach', subProjectPurchaseController.attach);
router.delete('/subprojects/purchases/detach', subProjectPurchaseController.detach);

module.exports = router