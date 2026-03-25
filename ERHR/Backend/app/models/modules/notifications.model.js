const { DataTypes } = require('sequelize')

const notificationsModel = (sequelize) => {
    const notifications = sequelize.define("notifications", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        is_read: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remark: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date_read: {
            type: DataTypes.DATE,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return notifications
}
module.exports = notificationsModel