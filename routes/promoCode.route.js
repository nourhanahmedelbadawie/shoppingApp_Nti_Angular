const express= require('express')
const router = new express.Router();
const promoCodeController = require('../app/controllers/promoCode.controllers');
const auth = require('../app/middleware/auth');
router.post('/enter-promo-code',auth,promoCodeController.enterPromoCode)
router.get('/:id',promoCodeController.getPromoCode)
router.post('/useremail',promoCodeController.getUserEmail)



module.exports=router;