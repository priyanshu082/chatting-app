"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import signup from "../../../public/signUp.svg";
import Image from "next/image";

const SignUpPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    mobileNo: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);

      console.log(response.data.message);
      alert("user ban gya");
      router.push(`/profile/${response.data.saveUser.username}`);
    } catch (error) {
      console.log("user pehle se hai", error.message);
      alert("user pehle se hai login krle jaakr ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow flex flex-row-reverse w-[85vw] h-[85vh] text-whiteText bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] font-poppins">
      <div className="w-[45%]  flex flex-col justify-center items-center rounded-[1vw]">
        <Image src={signup} className="w-[65%] " />

        <div className="mt-[2vw] font-bold text-[3.25vw]">PiChat</div>
      </div>

      <div className="w-[55%] flex flex-col justify-center pl-[5vw]">
        <div className="text-darkText text-[1.05vw] font-semibold">
          START FOR FREE
        </div>
        <div className="flex flex-row items-baseline font-bold mt-[0.5vw] text-[3.5vw] ml-[-0.3vw]">
          Create new account
          <div className=" rounded-full bg-blue-500 w-[1vw] h-[1vw] ml-[1vw]" />
        </div>
        <div className="text-darkText font-medium mt-[0.5vw]">
          Already A Member?{" "}
          <Link href="/login" className="text-blue-500">
            LogIn
          </Link>
        </div>

        <div class="w-[80%] mt-[1vw]">
          <div class="relative w-full min-w-[200px] h-[3vw] mt-[1vw]">
            <input
              required
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              class="peer w-full h-full bg-zinc-800 text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  transition-all duration-300 ease-in-out placeholder-shown:border focus:border-2 focus:border-t-transparent text-[1.4vw] px-3 py-2.5 rounded-[7px] focus:border-blue-600 border-transparent"
              placeholder=" "
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all duration-400 ease-in-out -top-1.5 peer-placeholder-shown:text-sm text-[0.75vw] peer-focus:text-[0.85vw] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-gray-200 peer-focus:after:!border-blue-600">
              Username
            </label>
          </div>
        </div>

        <div className="w-[80%] mt-[1vw]">
          <div className="relative w-full min-w-[200px] h-[3vw] mt-[1vw]">
            <input
              required
              onChange={(e) => {
                setUser({ ...user, mobileNo: e.target.value });
              }}
              className="peer w-full h-full bg-zinc-800 text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  transition-all duration-300 ease-in-out placeholder-shown:border focus:border-2 focus:border-t-transparent text-[1.4vw] px-3 py-2.5 rounded-[7px] focus:border-blue-600 border-transparent"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all duration-400 ease-in-out -top-1.5 peer-placeholder-shown:text-sm text-[0.75vw] peer-focus:text-[0.85vw] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-gray-200 peer-focus:after:!border-blue-600">
              Enter your Number
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
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all duration-400 ease-in-out -top-1.5 peer-placeholder-shown:text-sm text-[0.75vw] peer-focus:text-[0.85vw] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-600 after:border-blue-gray-200 peer-focus:after:!border-blue-600">
              Password
            </label>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-around items-center mr-[10vw] mt-[3vw]">
          <button
            onClick={onSignUp}
            className="bg-customBlue transition-all duration-300 ease-in-out hover:bg-blue-900 shadow-md shadow-blue-700 px-[3.5vw] font-medium py-[0.5vw] text-[1.25vw] rounded-[2vw] "
          >
            Create Account
          </button>
          <Link
            href="/"
            className="bg-customBlue transition-all duration-300 ease-in-out hover:bg-blue-900 shadow-md shadow-blue-700 px-[3.5vw] font-medium py-[0.5vw] text-[1.25vw] rounded-[2vw] "
          >
            Home
          </Link>
        </div>
      </div>
    </div>

    //       <div className='flex flex-col p-[200px]'>
    //         <p>{loading ? "loading" : "signup"}</p>

    //         <label htmlFor='username' >Username</label>
    //         <input
    //         id='username'
    //         type='text'
    //         value={user.username}
    //         onChange={(e)=>{setUser({...user,username:e.target.value})}}
    //         placeholder='username'
    //         className='text-black'
    //         />

    //         <label htmlFor='email'>email</label>
    //         <input
    //         id='email'
    //         type='text'
    //         value={user.email}
    //         onChange={(e)=>{setUser({...user,email:e.target.value})}}
    //         placeholder='email'
    //         className='text-black'
    //         />

    //         <label htmlFor='password' >password</label>
    //         <input
    //         id='password'
    //         type='password'
    //         value={user.password}
    //         onChange={(e)=>{setUser({...user,password:e.target.value})}}
    //         placeholder='password'
    //         className='text-black'
    //         />

    // onClick={onSignUp}
    //         <button

    //         className='bg-white mt-[20px] w-[100px] text-black'
    //         >Signup Here</button>

    //         <Link href='/login'>go to login</Link>
    //       </div>

    //
  );
};

export default SignUpPage;
