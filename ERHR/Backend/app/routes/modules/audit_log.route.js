const express = require('express')
const router = express.Router()
const auditController = require('../../controllers/audit_log.controller')

router.get('/',              auditController.getAll)
router.post('/',             auditController.create)
router.put('/:id',           auditController.update)
router.delete('/:id',        auditController.destroy)

module.exports = router