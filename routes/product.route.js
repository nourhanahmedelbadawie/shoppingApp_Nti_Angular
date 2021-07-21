const express = require('express')
const router = new express.Router()
const productController = require('../app/controllers/product.controllers')
const auth = require('../app/middleware/auth')
router.post('/enter-product',auth,productController.enterProduct)
module.exports=router