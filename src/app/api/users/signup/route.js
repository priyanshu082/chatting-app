import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

await connectDB()


export const POST= async (request)=>{
    try {
        
       const response= await request.json();
       const {username,email,password}=response
       console.log(response)

       //check if useralready exist
        const user=await User.findOne({email})

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
            email,
            password:hashedPassword
        })

        const saveUser= await newUser.save()
        // console.log(saveUser)

        return NextResponse.json({
            message:"User Create succesfully",
            success:true,
            saveUser
        })

    } catch (error) {
        return NextRequest.json({error:error.message},
            {status:500})
    }
}