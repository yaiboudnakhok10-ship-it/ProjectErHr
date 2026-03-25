const express = require('express')
const router = express.Router()
const settingsController = require('../../controllers/settings.controller')

router.get('/',              settingsController.getAll)
router.post('/',             settingsController.create)
router.put('/:id',           settingsController.update)
router.delete('/:id',        settingsController.destroy)

module.exports = router