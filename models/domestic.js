const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const domesticSchema = new mongoose.Schema(
    {
        domestic_sponser_name: {
            type: String,
            required: true
        },
        domestic_sponser_eid: {
            type: Number,
            required: true
        },
        domestic_sponser_nationality: {
            type: String,
            required:true
        },
    },
    {
        timestamps: true
    }
);
const domesticModel = mongoose.model('domestics', domesticSchema)
module.exports=domesticModel