"use client"
import { useRouter } from "next/navigation";
import React from "react";

const UserProfile = ({ params }) => {
  const router = useRouter();
  const goToChats = ()=>
  {
    router.push("/chats")
  }
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      profile paage
      <div className="mt-[20px]">
        profile of : <span className="p-[10px] bg-orange-500">{params.id}</span>
        <button onClick={goToChats} className="p-[10px] bg-green-500">
          Go to Chats
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
