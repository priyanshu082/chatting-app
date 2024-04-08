import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    author:{
        type:String,
        required:[true,"Please Provide author"],
    },
    message:{
        type:String,
        required:[true,"Please provide message"],
    },
    room:{
      type:String,
      required:[true,"Please Provide room"],
    },
    time:{
        type:String
    }
}
)


const Message = mongoose.models.message || mongoose.model("message",messageSchema)

export default Message
