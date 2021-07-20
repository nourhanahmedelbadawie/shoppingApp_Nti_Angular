const express = require('express')
const router = new express.Router()
const userController = require('../app/controllers/user.controllers')
const auth = require('../app/middleware/auth')

router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.post('/user/activate/:otp', userController.activateUser)

router.post('/user/logout', auth,userController.logout)
router.post('/user/logoutAll', auth,userController.logoutAll)
router.post('/user/me', auth,userController.me)

module.exports=router