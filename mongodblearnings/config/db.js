const mongoose=require("mongoose")


const connectDB=async()=>{
    mongoose.connect("mongodb+srv://pangajk3:z1U1WNDyZA5TycKZ@leranmongodb.g2g0e.mongodb.net/paractice")
}



module.exports={
    connectDB
}