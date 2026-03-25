const express = require('express')
const router = express.Router()
const penaltyController = require('../../controllers/penalty_type.controller')

router.get('/',              penaltyController.getAll)
router.post('/',             penaltyController.create)
router.put('/:id',           penaltyController.update)
router.delete('/:id',        penaltyController.destroy)

module.exports = router