const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    category:{
        required:true,
        type:String,
        trim:true,
    },
    images:[],    
    sizes:[],
    hasSale:{
        required:true,
        type:Boolean
    },
    type:{
        required:true,
        type:String,
        trim:true,
    },
    priceBeforSale:{
        type:String,
        trim:true,
    },
    priceAfterSale:{
        type:String,
        trim:true,
    },
    AvailableInStock:{
        type:Number,
        required:true,
    },
    colors:[ ]
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product