const express = require('express')
const router = new express.Router()
const infoController = require('../app/controllers/informations.controllers')
const auth = require('../app/middleware/auth')
router.post('/enter-info-app',auth,infoController.enterInfoApp)
router.get('/get-info-app',auth,infoController.getInfoApp)
module.exports=router