const express = require('express')
const router = express.Router()
const domesticController = require('../controllers/domesticControllers')

router.post('/addDomesticSponser', domesticController.addDomesticSponser)
router.get('/getDomesticSponsers',domesticController.getDomesticSponsers)
module.exports=router