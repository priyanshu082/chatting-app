import bcryptjs from 'bcryptjs'
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import jwt  from 'jsonwebtoken';

await connectDB();

export const POST=async(request)=>{
    try {
        const reqBody=await request.json();
        const {mobileNo,password}=reqBody
        console.log(reqBody);

        const user=await User.findOne({mobileNo})
        if(!user){
            return NextResponse.json({error:"User Doesnt exist"},{status:400})
        }

        //check if password is correct
        const validPassword=await bcryptjs.compare(password,user.password)

        if(!validPassword){
            return NextResponse.json({error:"Password is Wrong"},{status:400})
        }

        //create token data
        console.log(user);
        const tokenData={
            id:user._id,
            username:user.username,
            mobileNo:user.mobileNo
        }

        //create token
        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:'1d'})
        const response =NextResponse.json({
            message:"Login Successful ",
            success:true,
            user
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}