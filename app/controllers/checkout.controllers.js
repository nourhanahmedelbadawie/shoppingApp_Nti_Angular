const CheckOutModel = require('../../database/models/checkout.model')
var emailUser = require('../middleware/email-user');

class CheckOutC{
    static checkOut =async (req,res)=>{ 
        try{
            const checkoutData = new CheckOutModel({
                userId: req.user._id,
                ...req.body
            }) 
            await checkoutData.save()
            res.status(200).send({
                apiStatus: true,
                message: "success",
                data: checkoutData
            })
           await sendEmailToUSer(req.user.email)
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message: "error inserting data",
                data: e
            })
        }
    }
}
const sendEmailToUSer = async(email)=>{
     
    let mailOptions = {
        from: 'nourhanahmedelbadawe@gmail.com',
        to: email,
        subject: 'promocode',
        text: 'promocode added successfuly!'
      };
      
    try {
     await emailUser(mailOptions)
    
    }
    catch(e){
        console.log(e)
    }
}
module.exports = CheckOutC