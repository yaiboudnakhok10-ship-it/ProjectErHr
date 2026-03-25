const { DataTypes } = require('sequelize')

const officersModel = (sequelize) =>{
    const office = sequelize.define("officers",{
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            autoIncrement:true
        },
         emp_id:{
         type: DataTypes.BIGINT,
        allowNull: false     
        },
        signature_url:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false
        },
        remark:{
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
    return office
}
module.exports = officersModel