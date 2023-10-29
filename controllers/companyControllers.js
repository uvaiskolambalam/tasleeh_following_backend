const Company = require("../models/companyModel")
module.exports = {
    companyPost: async (req, res, next) => {
        try {
        
             console.log(req.body,'today data');
            const company = await Company.findOne({ company_code: req.body.company_code })
           
            console.log('sss');
            if (company) {
               return res.status(200).json({message:"Company alredy exists"})
            } 
            const companyData = req.body
            console.log(companyData, 'dddd');
            console.log(req.body, 'data vannyu');



            // date = new Date(req.body.license_exp)
            // year = date.getFullYear()
            // month = date.getMonth()+1
            // dt = date.getDate()
            
            // if (dt < 10) {
            //     dt='0'+dt
            // }
            // if (month < 10) {
            //     month='0'+month
            // }
            // const lisenseD=dt+'-'+month+'-'+year

            // console.log(lisenseD, 'full date');
            


            
            
            await new Company({
                
                // email: req.body.email,
                company_name: req.body.company_name,
                lisence_number:req.body.lisence_number,
                company_code: req.body.company_code,
                mensha_no: req.body.mensha_no,
                license_exp: req.body.license_exp,
                mensha_exp: req.body.mensha_exp,
                daman_exp: req.body.daman_exp,
                echannel_exp: req.body.echannel_exp
                

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
    },
    getOwnCompanyDetails: async (req, res, next) => {
        try {
            const ownCompany = await Company.findOne({ _id: req.params.id })
            res.status(200).json(ownCompany)
        } catch (error) {
            console.log(error);
        }
    },
    editCompanyDetails: async (req, res, next) => {
        try {
            console.log(req.body,'poda thendi');
            console.log(req.params.id,'poda pati');
            const company = await Company.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        company_name:req.body.company_name,
                        license_exp: req.body.license_exp,
                        mensha_exp: req.body.mensha_exp,
                        daman_exp: req.body.daman_exp,
                        echannel_exp:req.body.echannel_exp
                    }
                })
            res.status(200).json({message:"Company Data Updated Successfully",sucess:true})
            
        } catch (error) {
            console.log(error);
            
        }
    },
    getCompaniesAboutExpiry: async (req, res, next) => {
        try {
            const companyData = await Company.find()
            // console.log(companyData,'companyData');
            // const today = new Date()
            // const targetDate = new Date(companyData.license_exp)
            // const defference=targetDate - today
            // const dum = companyData.license_exp - new Date() 

            const currentDate = new Date();

           const thirtyDaysFromToday = new Date();
            thirtyDaysFromToday.setDate(currentDate.getDate() + 30);
            console.log(thirtyDaysFromToday,'thirtyDaysFromToday');
            let count = 0;

for (const item of companyData) {
    const date = item.license_exp;
    const timeDifference = date - currentDate;
    console.log(timeDifference,'poda');
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
  if (daysDifference >= 0 && daysDifference <= 30) {
    count++;
  }
}
            console.log(count,'dummmm');
            // if (companyData.license_exp - new Date() <= 60) {
                
            // }
        } catch (error) {
            console.log(error);
        }
    }
    
}