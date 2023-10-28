const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const companySchema = new mongoose.Schema(
    {
        // : {
        //     type: String,
        //     required: true
        // },
        company_name: {
            type: String,
            required: true
        },
        lisence_number: {
            type: String,
            required:true
        },
        company_code: {
            type: Number,
            required:false
        },
       
        mensha_no: {
            type: Number,
            required:false
        },
        license_exp: {
            type: String,
            required:true
        },
        mensha_exp: {
            type: String,
            required:false
        },
        daman_exp: {
            type: String,
            required:false
        },
        echannel_exp: {
            type: String,
            required:false
        },
        user_index: {
            type: Number,
            default:10
        }
       
        
        
    },
    {
        timestamps: true
    }
);
const companyModel = mongoose.model('companies', companySchema)
module.exports=companyModel