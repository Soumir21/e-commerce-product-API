const mongoose= require("mongoose")
const url="mongodb+srv://duarahsj:mY6uVZV0sarVWUBD@cluster0.0wqnr4w.mongodb.net/"
const dbConnect=async()=>{
    try{
        console.log("trying to connect .......")
        await mongoose.connect(url)
        console.log("connection successfull")

    }
    catch(err){
        console.log(err)
    }
}

module.exports= dbConnect