import { NextResponse } from "next/server";

export const GET=async ()=>{
    try {
        const response=NextResponse.json({
            message:"Logout Successful",
            success:true,
        })

        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0)
        })

        return response 
    } catch (error) {
        return NextResponse.json({error:error.messgae},{status:500})
    }
}