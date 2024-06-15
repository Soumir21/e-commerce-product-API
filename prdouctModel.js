const mongoose=require("mongoose");
const imageSchema=new mongoose.Schema({
    id: {
        type:String,
        default: false
    },
    width: {
        type:Number,
        default: false
    },
    height: {
        type:Number,
        default: false
    },
    url: {
        type:String,
        default: false
    },
    filename: {
        type:String,
        default: false
    },
    size: {
        type:Number,
        default: false
    },
    type: {
        type:String,
        default: false
    },
    
})
const productSchema=new mongoose.Schema({
    id: {
        type:String,
        trim: true,
    },
    name: {
        type: String,
        default: false
    },
    company: {
        type: String,
        default: false
    },
    price: {
        type: Number,
        default: false
    },
    colors: [{
        type: String,
        default: false
    }],
    description: {
        type: String,
        default: false
    },
    category: {
        type: String,
        default: false
    },

    featured: {
        type: Boolean,
        default: false
    },
    stock: {
        type: Number,
        default: false
    },
    reviews: {
        type: Number,
        default: false
    },
    stars: {
        type: Number,
        default: false
    },
    image:[imageSchema]

   
})

const Product=new mongoose.model("Product",productSchema);

module.exports=Product