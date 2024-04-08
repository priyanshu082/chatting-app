import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {getDataFromToken} from "@/helpers/getDataFromToken";
await connectDB();

export const GET = async(request)=>
{
  try{
    const userID = await getDataFromToken(request);
    const user = await User.findOne({
      _id:userID
    });
    return NextResponse.json({
      message:"user found successfully",
      user
    });
  }
  catch(error)
  {
    return NextResponse.json({
      error:error.message,
    })
  }
}