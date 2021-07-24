const CheckOutModel = require('../../database/models/checkout.model')
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
            sendEmailToUSer(req.user.email)
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
    try {
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nourhanahmedelbadawe@gmail.com',
              pass: '12119942010'
            }
          });
          
          var mailOptions = {
            from: 'nourhanahmedelbadawe@gmail.com',
            to: email,
            subject: 'promocode',
            text: 'promocode added successfuly!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
    }
    catch(e){
        console.log(e)
    }
}
module.exports = CheckOutC