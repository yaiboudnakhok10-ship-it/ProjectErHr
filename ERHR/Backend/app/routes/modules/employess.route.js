const express = require('express')
const router = express.Router()
const empController = require('../../controllers/employess.controller')

router.get('/',              empController.getAll)
router.post('/',             empController.create)
router.put('/:id',           empController.update)
router.delete('/:id',        empController.destroy)

module.exports = router