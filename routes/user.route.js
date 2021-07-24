const express = require('express')
const router = new express.Router()
const userController = require('../app/controllers/user.controllers')
const auth = require('../app/middleware/auth')
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/activate/:otp', userController.activateUser)
router.post('/logout', auth,userController.logout)
router.post('/logoutAll', auth,userController.logoutAll)
router.post('/profile', auth,userController.me)
router.patch('/edit-profile/:id', auth,userController.editProfile)

router.post('/password-reset',userController.passwordReset)

module.exports=router