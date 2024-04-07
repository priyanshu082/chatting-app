import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    sender:{
        type:String,
        required:[true,"Please Provide Username"],
        unique:true,
    },
    room:{
        type:String,
        required:[true,"Please provide email"],
        unique:true,
    },
    content:{
      type:String,
      required:[true,"Please Provide Message"],
    }
})


const Message = mongoose.models.message || mongoose.model("message",messageSchema)

export default Message
