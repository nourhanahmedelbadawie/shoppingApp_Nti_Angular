const express = require('express')
const router = new express.Router()
const checkOutController = require('../app/controllers/checkout.controllers')
const auth = require('../app/middleware/auth')
router.post('/',auth,checkOutController.checkOut)
module.exports=router