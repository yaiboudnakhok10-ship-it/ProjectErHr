const express = require('express')
const router = express.Router()
const casesController = require('../../controllers/cases.controller')

router.get('/',              casesController.getAll)
router.post('/',             casesController.create)
router.put('/:id',           casesController.update)
router.delete('/:id',        casesController.destroy)

module.exports = router