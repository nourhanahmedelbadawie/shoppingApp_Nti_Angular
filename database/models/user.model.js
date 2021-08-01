const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:2,
        maxlength:20
    },
    birthDate:{
        type:Date
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    isAdmin:{
        type:Boolean,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        minlength:11
    },
    addresses:[
        {
            address:{
                addrDetails:{type:String}
            }
        }
    ],
    otp:{
        type:String,
        default: Date.now()
    },
    tokens:[{
        token:{type:String}
    }]
})
// hide some data
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    deletedElements = [ ]
    deletedElements.forEach(element => {
        delete user[element]
    });
    return user
}
// bcrypt password
userSchema.pre('save', async function(){
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password,parseInt(process.env.SALT))
})
//login
userSchema.statics.findByCreditionals = async(email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) throw new Error('invalid password')
    return user
}
//generate token
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
//relation
userSchema.virtual('user', {
    ref:"checkouts",
    localField:"_id",
    foreignField:"userId"
})
const User = mongoose.model('User', userSchema)
module.exports = User