"use client";
import React from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { SectionContext } from "../../Context/Context";

const SideBar = () => {
  const { section, setSection } = useContext(SectionContext);

  return (
    <div className="flex flex-col w-[4%] items-center mr-[1.5vw] h-full gap-[0.4vw] ">
      <Link
        onClick={() => setSection("chat")}
        href="/"
        className={` w-fit rounded-[0.3vw] p-[1.5vw] hover:scale-105 hover:bg-opacity-10 transition-all ease-in-out duration-300 text-[2vw] mt-[1vw] ml-[1vw]`}
      >
        <IoArrowBack />
      </Link>

      <div className="flex flex-col mt-[10vw] gap-[2.5vw]">
        <div
          onClick={() => setSection("chat")}
          className={`${
            section === "chat" ? " text-blue-500" : "bg-transparent"
          } transition-all ease-in-out duration-500 text-[2vw] flex flex-row flex-start`}
        >
          <div
            className={`${
              section === "chat"
                ? "opactiy-1 transition-all duration-500 ease-in-out"
                : "opacity-0"
            } border-l-[0.3vw] rounded-[0.2vw] border-blue-600 w-[0.25vw] mr-[1.5vw] h-[2vw]`}
          />
          <AiOutlineMessage className="" />
        </div>

        <div
          onClick={() => setSection("call")}
          className={`${
            section === "call" ? " text-blue-500" : "bg-transparent"
          } transition-all ease-in-out duration-500 text-[2vw] flex flex-row flex-start`}
        >
          <div
            className={`${
              section === "call"
                ? "opactiy-1 transition-all duration-500 ease-in-out"
                : "opacity-0"
            } border-l-[0.3vw] rounded-[0.2vw] border-blue-600 w-[0.25vw] mr-[1.5vw] h-[2vw]`}
          />
          <IoCallOutline />
        </div>
      </div>

      <div
          onClick={() => setSection("profile")}
          className={`${
            section === "profile" ? " text-blue-500" : "bg-transparent"
          } transition-all ease-in-out duration-500 text-[2vw] flex flex-row mt-[23vw] flex-start`}
        >
          <div
            className={`${
              section === "profile"
                ? "opactiy-1 transition-all duration-500 ease-in-out"
                : "opacity-0"
            } border-l-[0.3vw] rounded-[0.2vw] border-blue-600 w-[0.25vw] mr-[1.5vw] h-[2vw]`}
          />
          <CgProfile />
        </div>
    </div>
  );
};

export default SideBar;
