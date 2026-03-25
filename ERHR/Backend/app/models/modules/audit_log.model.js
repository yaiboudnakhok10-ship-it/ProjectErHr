const { DataTypes } = require('sequelize')

const auditLogModel = (sequelize) => {
    const auditLog = sequelize.define("audit_log", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
       user_agent: {
    type: DataTypes.TEXT,  
    allowNull: false
},
        ip_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        old_value: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return auditLog
}
module.exports = auditLogModel