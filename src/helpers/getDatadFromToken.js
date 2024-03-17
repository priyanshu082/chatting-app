import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const getDataFromToken=async(request)=>{
        try {
           const token= request.cookies.get('tokne')?.value || ""
            const decodedToken=jwt.verify(token,process.env.TOKEN_SECRET)

            return decodedToken.id
        } catch (error) {
            throw new Error(error.message)
        }
}