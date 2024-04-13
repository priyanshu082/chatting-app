import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
await connectDB()


export const POST= async (request)=>{
    try {
       const reqBody= await request.json();
       const {username,mobileNo,password}=reqBody
       console.log(reqBody);

       //check if useralready exist
        const user=await User.findOne({mobileNo})
       

        if(user){
            return NextResponse.json(
                {error:"User already exits"},
                {status:400}
                )
            }

            
        //hash pssword
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)
     
        
        const newUser= new User({
            username,
            mobileNo,
            password:hashedPassword
        })

        const saveUser= await newUser.save()
        console.log(saveUser)
        //create token data
        const tokenData={
            id:saveUser._id,
            username:saveUser.username,
            mobileNo:saveUser.mobileNo
        }

        //create token
        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:'1d'})
        const response =NextResponse.json({
            message:"Login Successful ",
            success:true,
            saveUser
        })
        console.log("token",token);

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response

    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
    }
}