const Info = require('../../database/models/informations.model')
class InfoC{
    static enterInfoApp=async (req,res)=>{
        try{
            const infoModal=new Info(req.body)
            await infoModal.save();
            res.status(200).send({
                apiStatus:true,
                message:"data inserted",
                data:infoModal
            })
        }       
        catch(err){
            res.status(500).send({
                apiStatus:false,
                message:"error inserting data",
                data:err.message
            })
        }
    }
    static getInfoApp=async (req,res)=>{
        try{
            const data = await Info.find()
            res.status(200).send({
                apiStatus:true,
                message:"data retrived",
                data: data
        })                       
        res.status(200).send(ProductrMap)
        }                  
        catch(e){
            res.status(500).send({
                apiStatus:false,              
                message:e.message
            })
        }
    }
}
module.exports = InfoC
