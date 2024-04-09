"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllChats from "@/Components/chats/AllChats";
import Calls from "@/Components/chats/Calls";
import MessageScreen from "@/Components/chats/MessageScreen";
import SamplePage from "@/Components/chats/SamplePage";
import SideBar from "@/Components/chats/SideBar";
import Profile from "../../Components/chats/Profile";
import Chat from "@/Components/chats/Chat";
import io from "socket.io-client";
import { SectionContext } from "@/Context/Context";

const socket = io.connect("http://localhost:3001");
const Page = () => {
  const { section } = useContext(SectionContext);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState("");
  const [sender, setSender] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [receiver,setReceiver] = useState("");
  function lexicographicalSmaller(str1, str2) {
    return str1 < str2 ? str1 : str2;
  }
  const handleClick = async (username) => {
    console.log(`username is ${username}`);
    const response = await axios.get("/api/users/me");
    const x = response.data.user.username;
    setSender(response.data.user.username);
    console.log(response);
    setReceiver(username);
    console.log("sender ",x);
    const small = lexicographicalSmaller(x, username);
    console.log(small);
    if(small===x)
    {
      setRoom(small + username);
      console.log("room",small+username);
      socket.emit("join_room",small+username);
    }
    else
    {
      setRoom(small + x);
      console.log("room",small+x);
      socket.emit("join_room",small+x);
    }
    setShowChat(true);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/all");
        console.log(response.data.users);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // Call the fetchUsers function to trigger the HTTP request
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="shadow flex flex-row w-[97vw] h-[90vh] bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] ">
      <SideBar />
      {/* <h2>{room}</h2> */}
      <div className={`${section === "chat" ? "flex" : "hidden"} w-[100%]`}>
        <AllChats users={users} onClick={handleClick} />
        {(showChat && (
          <Chat socket={socket} username={sender} room={room} receiver={receiver} />
        )) || <MessageScreen />}
      </div>

      <div className={`${section === "call" ? "flex" : "hidden"} w-[100%]`}>
        <Calls />
        <SamplePage />
      </div>

      <div className={`${section === "profile" ? "flex" : "hidden"} w-[100%]`}>
        <Profile />
      </div>
    </div>
  );
};

export default Page;
