const mongoose = require('mongoose')
const checkOutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    promoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'promoCodes'
    },
    products:[
        {
            category:{
                required:true,
                type:String,
                trim:true,
            },
            price:{
                type:String,
                required:true
            },
            size:{
                type:String,
            },
            color:{
                type:String
            },
            type:{
                required:true,
                type:String
            }
        }
    ],
    totalPrice:{
        type:String,
        required:true,
    },      
})
const CheckOut = mongoose.model('CheckOut', checkOutSchema)
module.exports = CheckOut