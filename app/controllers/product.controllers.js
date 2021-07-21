const Product = require('../../database/models/products.model')
class ProductC{
    static enterProduct =async (req,res)=>{
        try{
            const productData=new Product(req.body);
            await productData.save();
            res.status(200).send({
                apiStatus: true,
                data: productData,
                message: "user added successful"
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
    
}
module.exports = ProductC