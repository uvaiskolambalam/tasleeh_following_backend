const express = require('express')
const router = express.Router()
const companyController =require('../controllers/companyControllers')

router.post('/companies', companyController.companyPost)
router.get('/getCompanyDetails', companyController.getCompanyAllDetails)
router.get('/getOwnCompanyDetails/:id', companyController.getOwnCompanyDetails)
router.patch('/editCompanyDetails/:id',companyController.editCompanyDetails)
module.exports=router