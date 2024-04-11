import React,{useContext} from "react";
import avatar from "../../../public/Avatar2.svg";
import Image from "next/image";
import { SectionContext } from "@/Context/Context";

const ChatCard = ({ user, onClick }) => {

  const {active} = useContext(SectionContext);

  const handleClick = () => {
    onClick(user); 
  };


  return (
    <div className={`${active === user.mobileNo ? "bg-blue-500" : "bg-white bg-opacity-[8%] hover:bg-opacity-[15%]"} flex group  transition-all duration-300 ease-linear flex-row justify-between w-[93%] py-[1vw] px-[1.25vw] rounded-[1.25vw] cursor-pointer mt-[0.75vw]`} onClick={handleClick}>
      <div className={` ${active === user.mobileNo ? "bg-red-500 border-yellow-300 border-[2.5px]" : "border-blue-600 border-[1px]"}   w-[17%] rounded-full relative`}>

        <Image src={avatar} className=" object-cover rounded-full group-hover:scale-95 transition-all duration-100 ease-linear" alt="User Avatar" />

        <div className="absolute inset-0 flex mt-[-2.75vw] mr-[-2.6vw] items-center justify-center z-10 rounded-full ">
          <div className="w-[0.75vw] h-[0.75vw]  bg-green-500 rounded-full " />
        </div>
      </div>

      <div className="w-[80%] flex flex-col pt-[0.1vw]">
        <div className="text-[1.2vw] font-semibold">{user.username}</div>
        <div className={`w-[100%] ${active === user.mobileNo ? "text-white" : "text-darkText"} text-[1vw] overflow-hidden h-[1.75vw] mt-[0.1vw]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisc Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Cumque expedita
          eligendi, repudiandae mollitia animi aperiam fugiat perferendis magni
          dignissimos est voluptates quod architecto maiores possimus porro
          officiis! Deserunt, saepe voluptatum!
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
