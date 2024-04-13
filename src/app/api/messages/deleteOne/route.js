import Message from "@/models/messageModel";
import connectDB from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

await connectDB();

export const POST = async (request) => {
  try {
    
  
    const reqBody = await request.json();
    console.log("Request Body:", reqBody);

    const { _id } = reqBody;
    const message = await Message.findOne({ _id });
    console.log(message)

    if (message) {
      const deleteMessage = await Message.findOneAndDelete({_id});

      return NextResponse.json(
        { message: "message delte succesfully", deleteMessage },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "message not found" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
