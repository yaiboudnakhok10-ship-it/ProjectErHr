const db = require('../models/index')
const message = require('../constants/message')

const system_users = db.User

const getAll = async () => {
    const result = await system_users.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.emp_id || !data.username ){
        throw new Error(message.created400)
    }
    const result = await system_users.create(data)
    return result
}

const update = async (id, data) => {
    const num = await system_users.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await system_users.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }