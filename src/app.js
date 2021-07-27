const express= require('express')
const cors = require('cors')
require('dotenv').config()
require('../database/connection')
const userRoutes = require('../routes/user.route')
const productRoutes = require('../routes/product.route')
const promoCodeRoutes = require('../routes/promoCode.route')
const checkoutRoutes = require('../routes/checkout.route')

const chatRoutes = require('../routes/chat.route')
const infoRoutes = require('../routes/informations.route')

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/user',userRoutes)
app.use('/product',productRoutes)
app.use('/promo-code',promoCodeRoutes)
app.use('/check-out',checkoutRoutes)
app.use('/chat',chatRoutes)

app.use('/info',infoRoutes)

module.exports = app