const db = require('../models/index')
const message = require('../constants/message')

const document_type = db.document

const getAll = async () => {
    const result = await document_type.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.document_name || !data.detail){
        throw new Error(message.created400)
    }
    const result = await document_type.create(data)
    return result
}

const update = async (id, data) => {
    const num = await document_type.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await document_type.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }