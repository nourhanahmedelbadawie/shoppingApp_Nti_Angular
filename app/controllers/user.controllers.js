const User = require('../../database/models/user.model');
const sendEmail = require("../middleware/email-user");
const crypto = require("crypto");
const Joi = require("joi");
class Userx{
    static register = async (req,res)=>{
        try{
            const userData = new User(req.body)
            await userData.save()
            //send email==>
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: "user added successful"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message, 
                message: "error adding new user"
            })
        }
    }

    static login = async(req,res)=>{
        try{
            const userData = await User.findByCreditionals(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{userData, token},
                message:"logged in"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error in login"
            })
        }
    }

    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(ele=>{
                return ele.token!=req.token
            })
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data:'',
                message: "logged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in logout"
            })
        }
    }

    static logoutAll=async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data:'',
                message: "logged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in logout"
            })
        }
        
    }

    static me = async(req,res)=>{
        res.status(200).send({
            apiStatus: true,
            data:req.user,
            message:"data fetched"
        })
    }

    static activateUser = async(req,res)=>{
        try{
            const userData = await User.findOne({otp:req.params.otp , userStatus: false})
            if(!userData) throw new Error('no users to activate')
            userData.userStatus = true
            userData.otp=""
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message:"activated"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message, 
                message:'error'
            })
        }
    }

    static showAll =async(req,res)=>{
        try{
    const data =await User.find()
    res.send(data)
        }
        catch(e){
    res.send(e)
        }
    }
   // edit profile
   static editProfile =async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {runValidators:true, new:true})
        if(!user) {
            res.status(404).send({
                apiStatus: false,
                message: "user not found"
            })
        }else{
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "updated"
            })
        }
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "error"
        })
    }

   }
   //reset password
   static passwordReset = async(req,res)=>{
    try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const user = await User.findOne({ email: req.body.email });
        const id=user._id;
        const token=user.tokens
        // if (!user)
        //     return res.status(400).send("user with given email doesn't exist");

        // let token = await User.findOne({ userId: user._id });
        // if (!token) {
        //     token = await new User({
        //         userId: user._id,
        //         token: crypto.randomBytes(32).toString("hex"),
        //     }).save();
        // }

        const link = `${process.env.BASE_URL}/password-reset/${id}/${token}`;
        await sendEmail(user.email);
        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
}


}
module.exports = Userx