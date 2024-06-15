const express=require("express")
const {getAllProducts,getSingleProduct}=require("./productController")
const router=express.Router();
router.route("/").get(getAllProducts)
router.route("/:id").get(getSingleProduct)
// router.route("/").post(()=>)

module.exports=router