const express=require("express")
const router=express.Router()


router.get("/id",(req,res)=>{
    console.log("user/id route executed")
    res.send("i am executing from user routes")
})


module.exports={
    userRoutes:router
}