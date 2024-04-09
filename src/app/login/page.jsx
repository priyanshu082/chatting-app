"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import login from "../../../public/login.svg";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    mobileNo: "",
    password: "",
  });

  const onLogIn = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("successfull", response.data);
      router.push(`/profile/${response.data.user.username}`);
    } catch (error) {
      console.log("Login Failed", error.message);
      // toast.error(error.message);
    }
  };

  return (
    <div className="shadow flex flex-row-reverse w-[85vw] h-[85vh] text-whiteText bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] font-poppins">
      <div className="w-[45%]  flex flex-col justify-center items-center rounded-[1vw]">
        <Image src={login} className="w-[70%] " />

        <div className="mt-[2vw] font-bold text-[3.25vw]">Welcome</div>
      </div>

      <div className="w-[55%] flex flex-col justify-center pl-[5vw]">
        <div className="text-darkText text-[1.05vw] font-semibold">
          START FOR FREE
        </div>
        <div className="flex flex-row items-baseline font-bold text-[3.5vw] ml-[-0.3vw]">
          LogIn to Chat{" "}
          <div className=" rounded-full bg-blue-500 w-[1vw] h-[1vw] ml-[1vw]" />
        </div>
        <div className="text-darkText font-medium">
          Didn't have account?{" "}
          <Link href="/signup" className="text-blue-500">
            SignUp
          </Link>
        </div>

   
  <div className="w-[80%] mt-[1vw]">
  <div className="relative w-full min-w-[200px] h-[3vw] mt-[1vw]">
    <input
    required
    onChange={(e) => {
      setUser({ ...user, mobileNo: e.target.value });
    }}
      className="peer w-full h-full bg-zinc-800 text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  transition-all duration-300 ease-in-out placeholder-shown:border focus:border-2 focus:border-t-transparent text-[1.4vw] px-3 py-2.5 rounded-[7px] focus:border-blue-600 border-transparent"
      placeholder=" " />
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all duration-400 ease-in-out -top-1.5 peer-placeholder-shown:text-sm text-[0.75vw] peer-focus:text-[0.85vw] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-gray-200 peer-focus:after:!border-blue-600">Mobile No
    </label>
  </div>
</div>

  <div className="w-[80%] mt-[1vw]">
  <div className="relative w-full min-w-[200px] h-10 mt-[1vw]">
    <input
    required
    type="password"
    onChange={(e) => {
      setUser({ ...user, password: e.target.value });
    }}
      className="peer w-full h-full bg-zinc-800 text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  transition-all duration-300 ease-in-out placeholder-shown:border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-600 border-transparent"
      placeholder=" " />
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all duration-400 ease-in-out -top-1.5 peer-placeholder-shown:text-sm text-[0.75vw] peer-focus:text-[0.85vw] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-gray-200 peer-focus:after:!border-blue-600">Password
    </label>
  </div>
</div>
        

    <div className="flex flex-row-reverse justify-around items-center mr-[10vw] mt-[3vw]">
        <button
          onClick={onLogIn}
          className="bg-customBlue transition-all duration-300 ease-in-out hover:bg-blue-900 shadow-md shadow-blue-700 px-[3.5vw] font-medium py-[0.5vw] text-[1.25vw] rounded-[2vw] "
        >
          Login 
        </button>
        <Link
        href='/'
          className="bg-customBlue transition-all duration-300 ease-in-out hover:bg-blue-900 shadow-md shadow-blue-700 px-[3.5vw] font-medium py-[0.5vw] text-[1.25vw] rounded-[2vw] "
        >
         Home
        </Link>
    </div>

        {/* <Link href="/signup">go to signup</Link> */}
      </div>
    </div>
  );
};

export default LoginPage;
