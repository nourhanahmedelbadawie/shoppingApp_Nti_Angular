//chat app
const express= require('express')
const router = new express.Router()
const chatController = require('../app/controllers/chat.controllers')
router.get('/', chatController.chatApp);

module.exports=router