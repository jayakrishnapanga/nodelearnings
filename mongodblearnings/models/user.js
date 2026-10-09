const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            lowercase:true,
            minLength:8,
            maxLength:50,
            required:true,
            unique:true,
            trim:true
        },
        // age:{
        //     type:Number,
        //     min:18
        // },
        email:{
            type:String,
            lowercase:true,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            minLength:8,
            maxLength:20,
            unique:true,
            require:true,
            select:false
        },
        gender:{
            type:String,
            trim:true,
            validate(value){
                if(!["male","female","other"].includes(value)){
                    throw new Error("Gender data is not valid data")
                }
            }
        },
        mobileNumber:{
            type:String,
            required:true,
            unique:true
        },
        role:{
            type:String,
            validate(value){
                if(!["rentee","owner"].includes(value)){
                    throw new mongoose.Error("role data is not valid data")
                }
            }
        }
    },
    {
        timestamps:true
    }
)

const userModal=mongoose.model("User",userSchema)

module.exports={
    userModal
}