const express = require('express')
const router = express.Router()
const companyController =require('../controllers/companyControllers')

router.post('/companies', companyController.companyPost)
router.get('/getCompanyDetails',companyController.getCompanyAllDetails)
module.exports=router