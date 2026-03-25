const express = require('express')
const router = express.Router()
const documentController = require('../../controllers/document_type.controller')

router.get('/',              documentController.getAll)
router.post('/',             documentController.create)
router.put('/:id',           documentController.update)
router.delete('/:id',        documentController.destroy)

module.exports = router