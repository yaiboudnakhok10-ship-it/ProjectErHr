const Sequelize = require('sequelize')
const dbConfig  = require('../config/db.config')
const employeeModel = require('./modules/employees.model')
const systemuserModel = require('./modules/systemusers.model') 
const officersModel = require('./modules/officers.model')
const documentModel = require('./modules/document_type.model')
const incidentModel = require('./modules/incident_title.model')
const penaltyModel = require('./modules/penalty_type.model')
const settingsModel = require('./modules/settings.model')
const notificationsModel = require('./modules/notifications.model')
const auditLogModel = require('./modules/audit_log.model')
const casesModel = require('./modules/cases.model')


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:    dbConfig.HOST,
    port:    dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max:     dbConfig.pool.max,
        min:     dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle:    dbConfig.pool.idle
    },
    logging: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Epm = employeeModel(sequelize)
db.User = systemuserModel(sequelize)
db.Office = officersModel(sequelize)
db.document = documentModel(sequelize)
db.Incident= incidentModel(sequelize)
db.Penalty=penaltyModel(sequelize)
db.Setting=settingsModel(sequelize)
db.Notification=notificationsModel(sequelize)
db.auditLog=auditLogModel(sequelize)
db.Cases=casesModel(sequelize)
module.exports = db