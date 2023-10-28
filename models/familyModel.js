const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const familySchema = new mongoose.Schema(
    {
        sponser_name: {
            type: String,
            required: true
        },
        sponser_id: {
            type: Number,
            required: true
        },
        sponser_company: {
            type: String,
            required:true
        },
    },
    {
        timestamps: true
    }
);
const familyModel = mongoose.model('familys', familySchema)
module.exports=familyModel