import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import Message from "@/models/messageModel";

await connectDB();

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const {room} = reqBody;
    console.log("room haha",room);
    const response = await Message.deleteMany({ room: room });

    console.log(response);
    return NextResponse.json({
      success: true,
      message: 'Messages deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting messages:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
};
