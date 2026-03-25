const express = require('express')
const router = express.Router()
const officeController = require('../../controllers/officers.controller')

router.get('/',              officeController.getAll)
router.post('/',             officeController.create)
router.put('/:id',           officeController.update)
router.delete('/:id',        officeController.destroy)

module.exports = router