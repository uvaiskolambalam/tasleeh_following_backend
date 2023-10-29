const Domestic = require("../models/domestic")
module.exports = {
    addDomesticSponser: async (req, res, next) => {
        try {

                //  domestic_sponser_name
                //   domestic_sponser_nationality
                //   domestic_sponser_eid
            const domesticSponser = await Domestic.findOne({ domestic_sponser_eid: req.body.domestic_sponser_eid })
            if (domesticSponser) {
                return res.status(200).json({success:false,message:"Sponser alredy exists"})
            }

            await new Domestic({
                domestic_sponser_name: req.body.domestic_sponser_name,
                domestic_sponser_nationality: req.body.domestic_sponser_nationality,
                domestic_sponser_eid:req.body.domestic_sponser_eid
            }).save()

            res.status(200).json({ success: true, message: 'Sponser Sucessfully Added' })
        } catch (error) {
            console.log(error);
        }
    },
    getDomesticSponsers: async (req, res, next) => {
        try {
            const allDomestics = await Domestic.find()
            console.log(allDomestics,'tuttond');
            res.status(200).json({sponsers:allDomestics})
        } catch (error) {
            console.log(error);
        }
    }
}