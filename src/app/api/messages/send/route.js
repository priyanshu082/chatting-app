import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import Message from "@/models/messageModel";
import User from "@/models/userModel";
import {getDataFromToken} from "@/helpers/getDataFromToken";
await connectDB();

export const POST = async(request)=>
{
  try{
    const reqBody = await request.json();
    const userID = await getDataFromToken(request);
    return NextResponse.json({
      message:"users found successfully",
      users
    });
  }
  catch(error)
  {
    return NextResponse.json({
      error:error.message,
    })
  }
}