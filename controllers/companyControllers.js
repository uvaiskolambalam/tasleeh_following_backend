const Company = require("../models/companyModel")
module.exports = {
    companyPost: async (req, res, next) => {
        try {
        
             console.log(req.body,'today data');
            const company = await Company.findOne({ email: req.body.email })
           
            console.log('sss');
            if (company) {
               return res.status(200).json({message:"Company alredy exists"})
            } 
            const companyData = req.body
            console.log(companyData, 'dddd');
            console.log(req.body, 'data vannyu');
            
                await new Company({
                    email: req.body.email,
                    companyName: req.body.companyName,
                    // id:req.body.id
                }).save()
                res.status(200).json({sucess:true})

        } catch (error) {
            console.log(error);
        }
    },
    getCompanyAllDetails: async(req, res, next) => {
        try {
            const CompanyAllData = await Company.find()

            // CompanyAllData.count=CompanyAllData.length
            // console.log(CompanyAllData, 'ddaattaa');
            res.status(200).json({sucess:true,company:CompanyAllData})
        } catch (error) {
            console.log(error);
        }
    }
    
}