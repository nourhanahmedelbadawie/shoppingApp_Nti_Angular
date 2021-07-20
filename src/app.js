const express= require('express')
const cors = require('cors')

require('dotenv').config()
require('../database/connection')
const userRoutes = require('../routes/user.route')
const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRoutes)
module.exports = app