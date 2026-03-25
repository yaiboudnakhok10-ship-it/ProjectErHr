const db = require('../models/index')
const message = require('../constants/message')

const employees = db.Epm

const getAll = async () => {
    const result = await employees.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.employee_code || !data.fullname){
        throw new Error(message.created400)
    }
    const result = await employees.create(data)
    return result
}

const update = async (id, data) => {
    const num = await employees.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await employees.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }