const db = require('../models/index')
const message = require('../constants/message')

const officers = db.Office

const getAll = async () => {
    const result = await officers.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.emp_id || !data.signature_url ){
        throw new Error(message.created400)
    }
    const result = await officers.create(data)
    return result
}

const update = async (id, data) => {
    const num = await officers.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await officers.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }