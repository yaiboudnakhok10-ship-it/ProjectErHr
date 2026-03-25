const { DataTypes } = require('sequelize')

const documentModel = (sequelize) =>{
    const document = sequelize.define("document_type",{

        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            autoIncrement: true
        },
        document_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        detail:{
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
    return document
}
module.exports = documentModel