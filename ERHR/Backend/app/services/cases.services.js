const db = require('../models/index')
const message = require('../constants/message')

const cases = db.Cases

const getAll = async () => {
    const result = await cases.findAll()
    return result
}

const create = async (data) => {
    if (!data || !data.officer_sig_id || !data.document_type_id || !data.emp_id || !data.incident_title || !data.incident_location ){
        throw new Error(message.created400)
    }
    const result = await cases.create(data)
    return result
}

const update = async (id, data) => {
    const num = await cases.update(data, {
        where: { id }
    })
    if (num[0] != 1) throw new Error(message.updated0)
    return true
}

const destroy = async (id) => {
    const num = await cases.destroy({
        where: { id }
    })
    if (num != 1) throw new Error(message.delete0)
    return true
}

module.exports = { getAll, create, update, destroy }