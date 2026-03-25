const { DataTypes } = require('sequelize')

const employeeModel = (sequelize)=>{
  const Epm = sequelize.define('employees',{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    employee_code:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    position:{
        type:DataTypes.STRING,
        allowNull:false
    },
    project:{
        type:DataTypes.STRING,
        allowNull:false
    },
    company:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tel:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,

        allowNull:false
    },
    dob:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    real_resigned:{
        type:DataTypes.DATEONLY,
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
  return Epm
}
module.exports = employeeModel