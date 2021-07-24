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
   
}




module.exports=promoCodeC
