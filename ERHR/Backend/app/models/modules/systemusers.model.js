const { DataTypes } = require('sequelize')

const systemuserModel = (sequelize) =>{
    const User = sequelize.define('system_users',{
      id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true  
         },
      emp_id:{
         type: DataTypes.BIGINT,
        allowNull: false     
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password_hash:{
            type:DataTypes.STRING,
            allowNull:false
        },
        created_by:{
            type:DataTypes.STRING,
            allowNull:false
        },
        updated_by:{
            type:DataTypes.STRING,
            allowNull:false
        },
        created_at: {
         type: DataTypes.DATE,
         allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },{
        timestamps: false,
        freezeTableName: true
    })
    return User
}
module.exports = systemuserModel