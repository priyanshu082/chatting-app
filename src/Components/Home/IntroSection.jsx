import Image from "next/image";
import React from "react";
import person1 from "../../../public/Home/Person1.svg";

const IntroSection = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-[10vw]">
      <div className="flex flex-col mr-[3vw] items-start">
      <div className="text-[3.75vw] leading-[4.5vw] font-semibold typewriter">Swift Chat: Instant Connections, Effortless<br/>
      <h1 className="">Conversations</h1>
      </div>

      <div className="text-[1.25vw] text-darkText ">
      Connect Seamlessly, Chat Effortlessly: Elevate Your Conversations with Our Intuitive Chat Application!
      </div>

      
      </div>

      <Image src={person1} className="w-[35vw]  hover:scale-[102%] transition-all duration-1000 ease-in-out" />

    </div>
  );
};

export default IntroSection;
