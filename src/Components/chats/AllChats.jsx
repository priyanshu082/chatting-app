import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ChatCard from "./ChatCard";

const AllChats = ({ users, onClick }) => {
  return (
    <div className="relative w-[30%] ">

      <div className="flex flex-col px-[1vw]">
        <div className="pt-[1vw] px-[0.5vw] font-semibold text-[1.5vw]">
          Chats
        </div>
        <div className="mt-[1.5vw]">
          <input
            type="text"
            // onChange={(e) => {
            //   setUser({ ...user, password: e.target.value });
            // }}
            className="peer w-full outline outline-0 focus:outline-0 transition-all duration-300 ease-in-out placeholder-shown:border focus:border-[1px] px-[0.5vw] py-[0.25vw] rounded-[0.3vw]  focus:border-blue-600 border-[0.8px] border-zinc-700 bg-transparent"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[0.3vw] h-[83%] items-center pt-[1vw] overflow-y-scroll scrollbar-hide">
        {/* <SearchBar/> */}
        {users &&
          users.map((item, index) => (
            <ChatCard
              key={index} // Assuming each user has a unique id
              user={item}
              onClick={() => onClick(item.username, item.mobileNo)}// Pass the handleClick function as a prop
            
            />
          ))}
      </div>
    </div>
  );
};

export default AllChats;
