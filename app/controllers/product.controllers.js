const Product = require('../../database/models/products.model')
const fs = require('fs')
class ProductC{
    static enterProduct =async (req,res)=>{
        try{
            const productData=new Product(req.body);
            await productData.save();
            productData.images=[];
            req.files.forEach((el,i)=>{
                let data=( req.files[i].originalname.split('.')).pop();
                let oldName=req.files[i].destination +'/'+ req.files[i].filename;
                let newName=req.files[i].destination +'/'+ req.files[i].filename + '.' + data;
                productData.images.push(req.files[i].path);
                fs.rename(oldName,newName,(err)=>{
                    if(err)console.log(err)
                })
            })  
            res.status(200).send({
                apiStatus: true,
                data: productData,
                message: "product added successful"
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