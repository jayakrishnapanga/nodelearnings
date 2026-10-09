const express=require("express")
const app=express()
app.use(express.json())
// where you are this matters a lot and how you handling this 
// and also this order is most impoertant (err,req,res,next)
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         console.error(`error is handled propelry ${err}`)
//         res.status(500).send("okay something went wrong please contact the support team")
//     }
    
// })

app.get('/user',(req,res)=>{

    console.log("i am executing but some happened")
    throw new Error("hey man")
})
// app.use("/",(err,req,res,next)=>{
//     console.error(`error is handled propelry ${err}`)
//     res.status(500).send("okay something went wrong please contact the support team")
// })
app.listen(3000,()=>{
    console.log("i am listening at the errorhandling.js location at 3000")
})