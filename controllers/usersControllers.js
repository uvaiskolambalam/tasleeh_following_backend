const Users = require("../models/users")
const Company = require('../models/companyModel')
module.exports = {
    employeeDetails: async (req, res, next) => {
        try {
            const company = await Company.findOne({ _id: req.params.id })
            console.log(company,'firs');
            const userId =  'C' + company.company_code + '/U' + company.user_index
            await Company.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        user_index:company.user_index+1
                    }
                }
            )
            const existEmployee = await Users.findOne({ passport_number: req.body.passport_number })
            if (existEmployee) {
                return res.status(200).json({message:"Employee alredy exists"})
            }
            
            await new Users({
                employee_name: req.body.employee_name,
                passport_number: req.body.passport_number,
                nationality: req.body.nationality,
                passport_expiry: req.body.passport_expiry,
                work_type: req.body.work_type,
                visit_visa_date: req.body.visit_visa_date,
                on_arrival_date: req.body.on_arrival_date,
                exp_after_cancel: req.body.exp_after_cancel,
                eid_exp: req.body.eid_exp,
                labour_number: req.body.labour_number,
                labour_expiry: req.body.labour_expiry,
                profission: req.body.profission,
                eid_number: req.body.eid_number,
                uid_number: req.body.uid_number,
                insurance_exp: req.body.insurance_exp,
                iloe_exp: req.body.iloe_exp,
                user_id: userId,
                company_id:req.params.id
                
            }).save()
            res.status(200).json({sucess:true,message:"Employee Added Sucessfully"})

            // console.log(userId,'newa empoloyee');
        } catch (error) {
            console.log(error);
        }
    }
}