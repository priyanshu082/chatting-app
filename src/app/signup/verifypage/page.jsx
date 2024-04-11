"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import otp from "../../../../public/otp.svg"
import { Bars } from "react-loader-spinner";

const page = () => {
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e, field) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      setOtp((prevOtp) => ({
        ...prevOtp,
        [field]: value,
      }));

      if (value !== '') {
        const inputs = document.querySelectorAll('input');
        const currentIndex = Array.from(inputs).findIndex((input) => input === e.target);
        if (currentIndex < 3) {
          inputs[currentIndex + 1].focus();
        }
      } else if (value === '' && field !== 'first') {
        const inputs = document.querySelectorAll('input');
        const currentIndex = Array.from(inputs).findIndex((input) => input === e.target);
        inputs[currentIndex - 1].focus();
      }
    }
  };

  console.log(otp)

  const handleSubmit =async () => {
    try {
      const otpValue = `${otp.first}${otp.second}${otp.third}${otp.fourth}`;
      console.log(otpValue);
       setLoading(true);
       const response = await axios.patch("/api/users/verify", otpValue);
       router.push("/chats");
    } catch (error) {
      console.log(error);
    }
 
  };


 
  return (
    <div className=" items-center flex justify-center text-gray-300 ">
      <div className="shadow bg-darkBlack h-[75vh] w-[75vw] mt-[5vw] flex flex-row justify-around sm:items-center">
        {/* leftsdie */}

        <div className="flex flex-col w-[100%] mt-[15vw] sm:mt-[0] sm:w-[45%] sm:justify-center items-center ">

          <div className=" text-[15vw] sm:text-[7vw] font-bold font-audiowide text-gradient tracking-[2vw] ">
            OTP
          </div>

          <div className="text-[2.5vw] sm:text-[1.5vw] font-medium text-gray-300">
            Please enter the OTP send to you mobile number
          </div>
        
          <div  className="mt-[5vw] sm:mt-[3vw] flex flex-col justify-center gap-[2vw]">

            <div className="flex flex-row gap-[4vw] sm:gap-[2vw] justify-center">
              <input
                type="text"
                maxLength="1"
                value={otp.first}
                onChange={(e) => handleChange(e, "first")}
                className="w-[9vw] h-[9vw] sm:h-[5vw] sm:w-[5vw] text-black bg-white bg-opacity-90 rounded-[1vw] outline-0 text-[5vw] sm:text-[3vw]
                items-center text-center"
              />
              <input
                type="text"
                maxLength="1"
                value={otp.second}
                onChange={(e) => handleChange(e, "second")}
                className="w-[9vw] h-[9vw] sm:h-[5vw] sm:w-[5vw] text-black bg-white bg-opacity-90 rounded-[1vw] outline-0 text-[5vw] sm:text-[3vw]
                items-center text-center"
              />
              <input
                type="text"
                maxLength="1"
                value={otp.third}
                onChange={(e) => handleChange(e, "third")}
                className="w-[9vw] h-[9vw] sm:h-[5vw] sm:w-[5vw] text-black bg-white bg-opacity-90 rounded-[1vw] outline-0 text-[5vw] sm:text-[3vw]
                items-center text-center"
              />
              <input
                type="text"
                maxLength="1"
                value={otp.fourth}
                onChange={(e) => handleChange(e, "fourth")}
                className="w-[9vw] h-[9vw] sm:h-[5vw] sm:w-[5vw] text-black bg-white bg-opacity-90 rounded-[1vw] outline-0 text-[5vw] sm:text-[3vw]
                items-center text-center"
              />
            </div>

            <div className="text-gray-500 text-[2.5vw] sm:text-[1vw] mx-auto hover:text-gray-300 cursor-pointer sm:mt-0 mt-[2.5vw]">
                Didn't Recieve OTP?
            </div>

            <button
             onClick={handleSubmit}
              className=" bg-blue-600 text-white font-medium text-[4vw] sm:text-[1.75vw] mx-auto rounded-[0.5vw] py-[0.5vw] sm:py-[0.3vw] px-[8vw] sm:px-[4.5vw] transition-all duration-300 ease-in-out hover:bg-blue-500 mt-[2vw] sm:mt-0"
            >
              Submit
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="w-[45%] hidden sm:flex">
         <Image src='/otp-security.svg' width={400} height={400} className="w-[40vw]"/>
        </div>
      </div>
    </div>
  );
};

export default page;
