const Family = require("../models/familyModel")
module.exports = {
    postSponserData: async(req, res,next)=>{
        try {
            const sponser = await Family.findOne({ sponser_id: req.body.sponser_id })
            if (sponser) {
                return res.status(200).json({success:false,message:"Sponser alredy exists"})
            }
            console.log(req.body,'sponser data');

            await new Family({
                sponser_name: req.body.sponser_name,
                sponser_id: req.body.sponser_id,
                sponser_company:req.body.sponser_company
            }).save()

            res.status(200).json({success:true,message:'Sponser Sucessfully Added' })
            
        } catch (error) {
            console.log(error);
            
        }
    },
    getAllSponsers: async (req, res, next) => {
        try {
            const allSponsers = await Family.find()
            console.log(allSponsers,'tuttond');
            res.status(200).json({sucess:true,sponsers:allSponsers})
        } catch (error) {
            console.log(error);
            
        }
    }
}