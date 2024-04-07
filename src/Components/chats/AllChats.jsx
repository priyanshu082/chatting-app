import React from "react";
import SearchBar from "./SearchBar";
import ChatCard from "./ChatCard";

const AllChats = ({ users }) => {
  return (
    <div className="w-[33%] flex flex-col gap-[1vw] items-center  pt-[1vw] overflow-y-scroll">
      {/* <SearchBar/> */}
      {users.map((item) => {
         return <ChatCard user={item.username}/>
      })}
    </div>
  );
};

export default AllChats;
