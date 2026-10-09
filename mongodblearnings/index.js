const express=require("express")
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const {connectDB}=require("./config/db.js")
const {userModal}=require("./models/user.js")

app.get("/userdata",async(req,res)=>{
    console.log(req.query)
    const{email}=req.query
    console.log(email)
    // this is to find only one user
    try{
        const users=await userModal.findOne({email:email})
        if(!users){
            res.send("no user found")
        }else{
            res.send(users)
        }
    }catch(err){
        res.send("somethingwent wrong")
    }
    // this is to find all the users who email matches 
    // find will find the all users which matches this email
    // try{
    //     const users=await userModal.find({email:email})
    //     if(users.length===0){
    //         res.send("no user found")
    //     }else{
    //         res.send(users)
    //     }
    // }catch(err){
    //     const users=await userModal.find({email:email})
    //     if(users.length===0){
    //         res.send("no user found")
    //     }else{
    //         res.send(users)
    //     }
    // }
})
app.get("/feed", async(req,res)=>{
    try{
        // const users=await userModal.findOne({}) it will fetch the one user
        // if you doesn't pass anything in the method it will fetch all the users
        const users=await userModal.find({})
        console.log(users)
        if(users.length===0){
            res.send("users not found")
        }else{
            res.send(users)
        }
    }catch(err){
        res.send("something went wrong")
    }

})
app.post("/signup",async(req,res)=>{
        console.log(req.body)
        const{firstname,age,mail,password,gender,role,mobileno}=req.body
        // console.log("firstname",firstname)
        // console.log("age",age)
        // console.log("mail",mail)
        // console.log("password",password)
        try{
            const userdata={
                name:firstname,
                email:mail,
                age:age,
                password:password,
                role:role,
                gender:gender,
                mobileNumber:mobileno
            }
            const user=new userModal(userdata)
            console.log(user)
            await user.save()
            res.send("usersaved successfully")
        }catch(err){
            console.log(err)
            res.send("Error while creating new user"+err.message)
        }

})

app.patch("/user/update",async (req,res)=>{
    // const {email}=req.body
    const{firstname,age,mail,password,gender,role,mobileno}=req.body
    const userdata={
        name:firstname,
        email:mail,
        age:age,
        password:password,
        role:role,
        gender:gender,
        mobileNumber:mobileno
    }
    try{
        // please try to understand the difference executing this 
        // {runValidators:true} understand the importance of providing this options
        console.log(userdata)
        // await userModal.findOneAndUpdate({email:mail},userdata)
           await userModal.findOneAndUpdate({email:mail},userdata,{runValidators:true})
        res.send("user updated successfully")
    }catch(err){
        console.log("error occured while updating the data", err.message)
        //res.send("Error occurred while updating the data"+ err.message)
                              //or
        res.status(500).send(`Error occurred while updating the data ${err.message}`)
    }
})
//aceepting the params
app.delete("/user/delete/:userid",async (req,res)=>{
    console.log(req.params)
    const { userid} = req.params;
    try{
        const deleteuser=await userModal.findOneAndDelete({_id:userid})
        if(!deleteuser){
            res.send("user not to delete")
        }
        res.send("user deleted successfully ")
    }catch(err){
        res.send("Error while deleting the user",err.message)
    }
})





connectDB().then(()=>{
    console.log("db connection established successfully ")
    app.listen(3000,()=>{
        console.log("i am listening at port 3000")
    })
}).catch(()=>{
    console.log("db was not connected")
})

