import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide Username"],
        unique:true,
    },
    mobileNo:{
        type:Number,
        required:[true,"Please provide email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    },

    isVerified:{
        type:Boolean,default:false,
    },
    isAdmin:{
        type:Boolean,default:false,
    },
    forgotPasswordToken:String,
    verifyPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})


const User = mongoose.models.user || mongoose.model("user",userSchema)

export default User
