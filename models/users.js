const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const userSchema = new mongoose.Schema(
    {
        employee_name: {
            type: String,
            required:true
        },
        passport_number: {
            type: String,
            required:true
        },
        nationality: {
            type:String
        },
        passport_expiry: {
            type:String
        },
        work_type: {
            type:String
        },
        visit_visa_date: {
            type:String
        },
        on_arrival_date: {
            type:String
        },
        exp_after_cancel: {
            type:String
        },
        eid_exp: {
            type:String
        },
        labour_number: {
            type:Number
        },
        labour_expiry: {
            type:String
        },
        profission: {
            type:String
        },
        eid_number: {
            type:Number
        },
        uid_number: {
            type:Number
        },
        insurance_exp: {
            type:String
        },
        iloe_exp: {
            type:String
        },
        company_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'companies',
            required: true
        },
        user_id: {
            type: String,
            required:true
        }
        
        
        
    },
    {
        timestamps: true
    }
);
const userModal = mongoose.model('users', userSchema)
module.exports=userModal