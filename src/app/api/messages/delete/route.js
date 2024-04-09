import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import Message from "@/models/messageModel";

await connectDB();

export const POST = async (request) => {
  try {
      const reqBody = await request.json();
      const {room} = reqBody;
      const response = await Message.deleteMany({room:room});

      return NextResponse.json({
          message: "messages deleted successfully",
          response
      });
  } catch (error) {
      // Log the error for debugging
      console.error("Error in fetching messages:", error);

      return NextResponse.json({
          error: "Failed to delete message.",
      });
  }
};