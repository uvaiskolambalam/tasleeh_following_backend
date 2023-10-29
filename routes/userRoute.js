const express = require('express')
const router = express.Router()
const usersController =require('../controllers/usersControllers')



router.post('login')
router.post('/employeeDetails/:id', usersController.employeeDetails)
router.get('/getEmployees/:id', usersController.getEmployees)
router.get('/getOwnEmployee/:id', usersController.getOwnEmployee)
router.patch('/editEmployee/:id',usersController.editEmployee)
module.exports=router