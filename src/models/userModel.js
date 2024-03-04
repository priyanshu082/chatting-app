import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide Username"],
        unique:true,
    },
    email:{
        type:String,
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
    veerifyTokenExpiry:Date,
})


const User=mongoose.models.users || mongoose.model("user",userSchema)

export default User
