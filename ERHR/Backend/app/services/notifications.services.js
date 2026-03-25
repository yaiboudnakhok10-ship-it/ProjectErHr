const db = require('../models/index')
const message = require('../constants/message')

const notifications = db.Notification

const getAll = async () => {
    const result = await notifications.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.user_id || !data.topic ){
        throw new Error(message.created400)
    }
    const result = await notifications.create(data)
    return result
}

const update = async (id, data) => {
    const num = await notifications.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await notifications.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }