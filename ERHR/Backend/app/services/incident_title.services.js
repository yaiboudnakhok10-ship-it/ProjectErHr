const db = require('../models/index')
const message = require('../constants/message')

const incident_title = db.Incident

const getAll = async () => {
    const result = await incident_title.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.document_type_id || !data.title_name){
        throw new Error(message.created400)
    }
    const result = await incident_title.create(data)
    return result
}

const update = async (id, data) => {
    const num = await incident_title.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await incident_title.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }