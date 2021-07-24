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
module.exports = CheckOutC