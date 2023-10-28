const express = require('express')
const router = express.Router()
const familyController =require( '../controllers/familyControllers')


router.post('/familys', familyController.postSponserData)
router.get('/getSponsers',familyController.getAllSponsers)
module.exports=router