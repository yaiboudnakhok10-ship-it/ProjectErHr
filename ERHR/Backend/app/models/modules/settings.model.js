const { DataTypes } = require('sequelize')

const settingsModel = (sequelize) => {
    const settings = sequelize.define("settings", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        setting_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        remark: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return settings
}
module.exports = settingsModel