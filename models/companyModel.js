const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const companySchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        // id: {
        //     type: Number,
        //     required:true
        // }
        
        
    },
    {
        timestamps: true
    }
);
const companyModel = mongoose.model('companies', companySchema)
module.exports=companyModel