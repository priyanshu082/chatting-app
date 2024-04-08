"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick=async()=>{
    try {
      console.log(otp)
      setLoading(true)
      const response =await axios.patch("/api/users/verify",otp)
      console.log(response)
      router.push("/chats");
    } catch (error) {
      console.log(error)
    }
 
  }
  
  return (
    <div>
      <div>Enter the OTP</div>
      <div>
        <input
          type=""
          onChange={(e) => setOtp(e.target.value)}
          className="text-black"
        />
        <button onClick={handleClick}>
          click me
        </button>
      </div>
      {/* <Bars
        height="50"
        width="50"
        color="blue"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </div>
  );
};

export default page;