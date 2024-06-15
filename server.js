const express=require("express");
const dbConnect=require("./dbConnect");
const productRouter=require("./productRouter");
const app=express();

dbConnect();
app.use("/api/products",productRouter)
app.listen(5000,()=>{
    console.log("server started at 5000")
})

