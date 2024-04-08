import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import Message from "@/models/messageModel";
import User from "@/models/userModel";

await connectDB();

export const POST = async (request) => {
    try {
        const reqBody = await request.json();
        const { room, author, message, time } = reqBody;
        
        if (!room || !author || !message || !time) {
            return NextResponse.json({
                error: "Missing required fields.",
            });
        }

        // Create a new message
        await Message.create({ room, author, message, time });

        return NextResponse.json({
            message: "New chat and message created successfully",
        });
    } catch (error) {
        // Log the error for debugging
        console.error("Error creating message:", error);

        return NextResponse.json({
            error: "Failed to create message.",
        });
    }
};
