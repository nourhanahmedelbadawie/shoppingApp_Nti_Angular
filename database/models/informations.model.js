const mongoose = require('mongoose');
const validator = require('validator');
const infoSchema=new mongoose.Schema({
    phones:[],
    addresses:[],
    email:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    ourApp:{
        type:String
    },
    privacyPolicy:{
        type:String
    }
})
const Info = mongoose.model('Info', infoSchema)
module.exports = Info