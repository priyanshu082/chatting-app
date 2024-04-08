import React,{useState,useEffect}from "react";
import SearchBar from "./SearchBar";
import ChatCard from "./ChatCard";

const AllChats = ({ users,onClick }) => {

  return (
    <div className="w-[33%] flex flex-col gap-[1vw] items-center pt-[1vw] overflow-y-scroll">
      {/* <SearchBar/> */}
      {users && users.map((item,index) => (
        <ChatCard
          key={index} // Assuming each user has a unique id
          user={item.username}
          onClick={() => onClick(item.username)} // Pass the handleClick function as a prop
        />
      ))}
    </div>
  );
};

export default AllChats;
