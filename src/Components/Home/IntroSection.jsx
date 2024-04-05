import Image from "next/image";
import React from "react";
import person1 from "../../../public/Home/Person1.svg";
import { FaChevronRight } from 'react-icons/fa'
import Link from "next/link";

const IntroSection = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-[10vw]">
      <div className="flex flex-col mr-[3vw] items-start">
      <div className="text-[3.75vw] leading-[4.5vw] font-semibold typewriter">Swift Chat: Instant Connections, Effortless<br/>
      <h1 className="">Conversations</h1>
      </div>

      <div className="text-[1.25vw] text-darkText w-[90%]">
      Connect Seamlessly, Chat Effortlessly: Elevate Your Conversations with Our Intuitive Chat Application!
      </div>

    <Link href="/chats">
    <button className="bg-customBlue py-[0.5vw] px-[2vw] mt-[2vw] flex flex-row justify-center items-center rounded-[1vw] hover:bg-blue-600 transition-all duration-500 ease-in-out hover:scale-105">
        Chat App<span className="ml-[0.2vw]"><FaChevronRight/></span>
      </button>
    </Link>
      

      
      </div>

      <Image src={person1} className="w-[35vw] mr-[-3vw] hover:scale-[102%] transition-all duration-1000 ease-in-out" />

    </div>
  );
};

export default IntroSection;
