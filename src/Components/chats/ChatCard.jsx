import React,{useContext} from "react";
import avatar from "../../../public/Avatar2.svg";
import Image from "next/image";
import { SectionContext } from "@/Context/Context";

const ChatCard = ({ user, onClick }) => {

  const { active } = useContext(SectionContext);

  const handleClick = () => {
    onClick(user); 
  };

 

  return (
    <div className={`${active=== user.username ? "bg-blue-600" : "bg-white bg-opacity-[8%] hover:bg-opacity-[15%]"} flex group  transition-all duration-300 ease-linear flex-row justify-between w-[93%]  p-[0.65vw] rounded-[0.5vw] cursor-pointer`} onClick={handleClick}>
      <div className="w-[15%] border-[1px] p-[1px] rounded-full border-blue-600  relative">
        <Image src={avatar} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-all duration-100 ease-linear" alt="User Avatar" />
        <div className="absolute inset-0 flex mt-[-2.75vw] mr-[-2.6vw] items-center justify-center z-10 rounded-full ">
          <div className="w-[1vw] h-[1vw] bg-green-500 rounded-full border-[2px] border-black" />
        </div>
      </div>

      <div className="w-[80%] flex flex-col pt-[0.1vw]">
        <div className="text-[1.2vw] font-semibold">{user.username}</div>
        <div className="w-[100%] text-darkText text-[1vw] overflow-hidden h-[1.75vw] mt-[0.1vw]">
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
