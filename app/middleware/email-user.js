

const emailUser=(email)=>{
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

module.exports = emailUser