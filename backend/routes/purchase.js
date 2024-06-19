const express = require('express')
const router = express.Router()

const purchaseController = require('../controllers/Purchase')

router.get('/project/:projectId/purchases', purchaseController.all)
router.get('/subProjects/:subProjectId/purchases', purchaseController.allForSubProject)
router.post('/purchases/create', purchaseController.create)
router.put('/purchases/update', purchaseController.updateOne)
router.delete('purchases/:id', purchaseController.deleteOne)

module.exports = router