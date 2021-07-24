const promoCode =  require('../../database/models/promoCode.model');

class promoCodeC{
    static enterPromoCode = async (req ,res) =>{
        try{
            const promoCodeData = new promoCode(req.body);
            await promoCodeData.save();
            res.status(200).send({
                apiStatus: true,
                data: promoCodeData,
                message: "promo code added successful"
            })       
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: e.message
            })       
        }
    }
    static getPromoCode= async (req ,res) =>{
        try{
            let id=req.params.id;
            const data=await promoCode.findById(id)
            const currentDate = new Date();          
            if(!data){
                res.status(404).send({
                    apiStatus:true,
                    message:"promo Code not found",
                    data: null
                })
            }
            else if(data.startDate.getTime() < currentDate.getTime() && data.endDate.getTime() > start.getTime()){
                res.status(200).send({
                    apiStatus:true,
                    message:"data retrived",
                    data: data
                })   
                sendEmailToUser()  
            }
            else{
                res.status(404).send({
                    apiStatus:true,
                    message:"date invalid",
                    data: null
                })
            }               
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:"error loading data",
                data: e
            })
        }
    }
}
const sendEmailToUser = async ()=>{
    let testAccount = await nodemailer.createTestAccount();

    
  // create reusable transporter object using the default SMTP transport
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });


    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "nourhanahmedelbadawie@gmail.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }



module.exports=promoCodeC
