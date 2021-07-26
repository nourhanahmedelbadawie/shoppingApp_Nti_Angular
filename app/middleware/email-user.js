const nodemailer = require('nodemailer')
const emailUser=(mailOptions)=>{
    try{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        Secure: false,
        port: 587,
        auth: {
          user: 'noreplay.OPSPv1@gmail.com',
          pass: 'Matrix219'
        }


      });
     
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
    }
    catch(e){
        res.status(500).send({
       
            message: "email is required",
           
        })
    }
}

module.exports = emailUser