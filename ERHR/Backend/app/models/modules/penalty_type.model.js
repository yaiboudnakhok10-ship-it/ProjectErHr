const { DataTypes } = require('sequelize')

const penaltyModel = (sequelize) => {
    const penalty = sequelize.define("penalty_type", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        penalty_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        penalty_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_by: {
            type: DataTypes.STRING,
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
    return penalty
}
module.exports = penaltyModel