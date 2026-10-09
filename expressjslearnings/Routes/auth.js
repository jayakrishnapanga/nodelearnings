const express=require("express")
const router=express.Router()



router.get("/login",(req,res)=>{

       console.log("auth login route is executed")
       res.send("hey main authtentication is done")

})

module.exports={
    authRoutes:router
}