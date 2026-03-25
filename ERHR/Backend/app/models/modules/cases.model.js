const { DataTypes } = require('sequelize')

const casesModel = (sequelize) => {
    const cases = sequelize.define("cases", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        document_type_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        emp_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        incident_location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        witnesses: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        incident_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        incident_title: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        damage_item: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        damage_type_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        loss_value: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        penalty_type_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        panalty_level_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        old_case: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        case_no: {
            type: DataTypes.STRING,
            allowNull: true
        },
        officer_sig_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        authorized_issuing_officer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        offender_signature: {
            type: DataTypes.STRING,
            allowNull: true
        },
        witness_sig: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        hr_manager_sig: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        committee: {
            type: DataTypes.STRING,
            allowNull: true
        },
        proposed_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        approved_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        total_damage_amount: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        total_deduction_amount: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        deduction_detail: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        monthly_deduction: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        deduction_start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        deduction_end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        offender_sig: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        verified_by_hr_sig: {
            type: DataTypes.TEXT,
            allowNull: true
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
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return cases
}
module.exports = casesModel