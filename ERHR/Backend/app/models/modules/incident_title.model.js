const { DataTypes } = require('sequelize')

const titleModel = (sequelize) =>{
    const title = sequelize.define("incident_title",{
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            autoIncrement: true
        },
        document_type_id:{
             type: DataTypes.BIGINT,
        allowNull: false    
        },
        title_name:{
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
    }

)
    return title
}
module.exports = titleModel