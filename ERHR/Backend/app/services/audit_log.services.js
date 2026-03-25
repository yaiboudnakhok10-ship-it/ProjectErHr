const db = require('../models/index')
const message = require('../constants/message')

const audit_log = db.auditLog


const getAll = async () => {
    const result = await audit_log.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.user_id || !data.user_agent){
        throw new Error(message.created400)
    }
    const result = await audit_log.create(data)
    return result
}

const update = async (id, data) => {
    const num = await audit_log.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await audit_log.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }