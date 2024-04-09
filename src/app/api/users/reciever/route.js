import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
await connectDB()

export const POST=async(request)=>{
    try {

        const {mobileNo}=await request.json()

        console.log({mobileNo})

        const user=await User.findOne({mobileNo})

        if(!user){
            return NextResponse.json(
                {error:"user not found"},
                {status:400}
            )
        }

        if(user){
           return NextResponse.json({
            message:"user found",
            user
           })
        }

    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
    }
}