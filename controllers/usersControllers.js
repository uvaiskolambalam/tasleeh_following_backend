const Users = require("../models/users")
const Company = require('../models/companyModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
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

            console.log(req.body,'rwqa visaaaaaaaaaaaa');
            if (existEmployee) {
                return res.status(200).json({message:"Employee alredy exists"})
            }
            if (req.body.visa_type === 1) {
                req.body.visa_type='VISIT'
            }
            if (req.body.visa_type === 2) {
                req.body.visa_type='ON ARRIVAL'
            }
            if (req.body.visa_type === 3) {
                req.body.visa_type='CANCELLED'
            }
            if (req.body.visa_type === 4) {
                req.body.visa_type="EMIRATES ID"
            }


            console.log(req.body,'visa tyrpe');
            
            await new Users({
                employee_name: req.body.employee_name,
                passport_number: req.body.passport_number,
                nationality: req.body.nationality,
                passport_expiry: req.body.passport_expiry,
                work_type: req.body.work_type,
                visa_type:req.body.visa_type,
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
    },
    getEmployees: async (req, res, next) => {
        try {
            const companyID = req.params.id
            console.log(companyID,'com');
            const employees = await Users.find({company_id:new ObjectId(companyID)})
           res.status(200).json({employees})
        } catch (error) {
            console.log(error);
        }
    },
    getOwnEmployee: async (req, res, next) => {
        try {
            const Employee = await Users.findById(req.params.id)
            // const companyID=new ObjectId(Employee.company_id).toString()
            const company = await Company.findOne(new ObjectId(Employee.company_id))
            console.log(company, 'this company');
            const totalData = {
                companyData: company,
                employeeData:Employee
            }
            res.status(200).json({totalData})
        } catch (error) {
            console.log(error);
        }
    },
    editEmployee: async (req, res, next) => {
        try {
            const employeeData=req.body
            const employeeId = req.params.id
           if (req.body.visa_type === 1) {
                req.body.visa_type='VISIT'
            }
            if (req.body.visa_type === 2) {
                req.body.visa_type='ON ARRIVAL'
            }
            if (req.body.visa_type === 3) {
                req.body.visa_type='CANCELLED'
            }
            if (req.body.visa_type === 4) {
                req.body.visa_type="EMIRATES ID"
            }
            
            await Users.findByIdAndUpdate(employeeId,
                {
                    $set: {
                        employee_name: req.body.employee_name,
                        passport_number: req.body.passport_number,
                        nationality: req.body.nationality,
                        passport_expiry: req.body.passport_expiry,
                        work_type: req.body.work_type,
                        visa_type:req.body.visa_type,
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
                        // user_id: userId,
                        company_id:req.body.companyId
                    }
                }
            )
            res.status(200).json({message:"Employee Data Updated Successfully", success:true})
        } catch (error) {
            console.log(error)
        }
    }
}