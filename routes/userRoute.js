const express = require('express')
const router = express.Router()
const usersController =require('../controllers/usersControllers')



router.post('login')
router.post('/employeeDetails/:id',usersController.employeeDetails)
module.exports=router