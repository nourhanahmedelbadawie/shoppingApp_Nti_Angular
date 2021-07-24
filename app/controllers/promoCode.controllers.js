const promoCode =  require('../../database/models/promoCode.model');
var nodemailer = require('nodemailer');
let userEmail=""


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
        sendEmailToUser()  
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
            else if(data.startDate.getTime() <= currentDate.getTime() && data.endDate.getTime() >= start.getTime()){
                res.status(200).send({
                    apiStatus:true,
                    message:"data retrived",
                    data: data
                })   
               
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
    static getUserEmail=async(req , res)=>{
        try{
            //    userEmail=
               console.log(req);
        
        res.status(200).send({
            apiStatus: true,
         
            message: "email added"
        })       
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            message: e.message
        }) 
    }
}
}
const sendEmailToUser = async ()=>{
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
            to: userEmail,
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



module.exports=promoCodeC
