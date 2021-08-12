const Product = require('../../database/models/products.model')
const fs = require('fs')
class ProductC{
    static enterProduct =async (req,res)=>{
        try{
            const productData=new Product(req.body);
            console.log(req.files)
            await productData.save();
            productData.images=[];
            req.files.forEach((el,i)=>{
                console.log(req.body.type+'-'+req.body.category+(i+1))
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
  
    static getAllPdt =async (req,res)=>{   
        try{
            const data = await Product.find()
            res.status(200).send({
                apiStatus:true,
                message:"data retrived",
                data: data,
                count: data.length
        })                       
        res.status(200).send(ProductrMap)
    }                  
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
        })
    }
    }
    static getSinglePdt =async (req,res)=>{
        try{
            let id=req.params.id;
            const data=await Product.findById(id)
            if(data){
                res.send(data)
            }}
        
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:"error loading data",
                data: e
            })
        }
    }

    //get product has sale
    static getProductHasSale = async(req,res)=>{
        try{
            const allProduct = await Product.find()
            const productHasSale=allProduct.filter(ele=>ele.hasSale)
            res.status(200).send({
                apiStatus:true,
                message:"data retrived",
                data: productHasSale,
                count: productHasSale.length
            })           
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:"error loading data",
            })
        }
      
    }
    //get product bt category
    static getPdtByCategory=async (req,res)=>{
        let category=req.params.category;
        try{
            const data=await Product.find({category})
            if(data){
                res.send(data)
            }}
        
        catch(e){
            res.status(500).send({
                apiStatus:false,
                message:"error",
                data: e
            })
        }

    }
    
}
module.exports = ProductC









