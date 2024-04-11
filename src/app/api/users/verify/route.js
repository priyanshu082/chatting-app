import bcryptjs from 'bcryptjs'
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import jwt  from 'jsonwebtoken';
import { getDataFromToken } from '@/helpers/getDataFromToken';
await connectDB();
export const PATCH = async(request)=>
{
  try
  {
    const userId = await getDataFromToken(request);
    const otp = await request.json();
    console.log(otp);
    if(otp===1234)
    {
      const user = await User.findOne({
        _id:userId,
      })
      user.isVerified = true;
      console.log(user);
      return NextResponse.json({
        message:"verification done",
      },{status:200})
    }
    return NextResponse.json({
      message:"user not found",
    },{status:402})
  }
  catch(error)
  {
    return NextResponse.json({
      error:error.message,
    },{status:500})
  }
}