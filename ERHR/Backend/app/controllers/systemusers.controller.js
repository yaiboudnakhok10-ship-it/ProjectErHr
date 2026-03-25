const userService = require('../services/systemuser.services')
const response = require('../utils/response')
const message = require('../constants/message')

const getAll = async (req, res) => {
    try {
        const data = await userService.getAll()
        response.success(res, data)
    } catch (err) {
        response.error(res, err.message || message.created500)
    }
}

const create = async (req, res) => {
    try {
        const data = await userService.create(req.body)
        response.success(res, data, 201)
    } catch (err) {
        response.error(res, err.message || message.created500)
    }
}

const update = async (req, res) => {
    try {
        await userService.update(req.params.id, req.body)
        response.success(res, { message: message.updated1 })
    } catch (err) {
        response.error(res, err.message || message.updated500)
    }
}

const destroy = async (req, res) => {
    try {
        await userService.destroy(req.params.id)
        response.success(res, { message: message.delete1 })
    } catch (err) {
        response.error(res, err.message || message.delete0)
    }
}

module.exports = { getAll, create, update, destroy }