const Product=require("./prdouctModel");
const getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products);
    }   
    catch(err){
        console.log(err)
    }
}

const getSingleProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const product=await Product.findOne({id:id});
        res.status(200).json(product);
    }   
    catch(err){
        console.log(err)
    }
}

module.exports={getAllProducts,getSingleProduct}