const express = require('express')
const router = express.Router()
const notificationsController = require('../../controllers/notifications.controller')

router.get('/',              notificationsController.getAll)
router.post('/',             notificationsController.create)
router.put('/:id',           notificationsController.update)
router.delete('/:id',        notificationsController.destroy)

module.exports = router