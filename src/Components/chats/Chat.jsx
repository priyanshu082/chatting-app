import React, { useEffect, useState, useRef } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import avatar from "/public/Avatar2.svg";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import { FaCaretDown } from "react-icons/fa";

let id;
function Chat({ socket, username, room, reciever }) {
  const [toggle, setToggle] = useState();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [sendto, setSendto] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isDelete, setIsDelete] = useState(1);

  const handleDeleteOne = async (_id) => {
    try {
      console.log(_id);
      const response = await axios.post("/api/messages/deleteOne", { _id });
      console.log(response.data);
      if (response) setIsDelete();
      setMessageList((list) => list.filter((item) => item._id !== _id));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/messages/get", { room: room });
        // Ensure response.data.messages is an array before setting messageList
        if (Array.isArray(response.data.messages)) {
          setMessageList(response.data.messages);
        } else {
          console.error(
            "Messages data is not an array:",
            response.data.messages
          );
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    const fetchRecieverData = async () => {
      try {
        const response = await axios.post(`/api/users/reciever`, reciever);
        const user = response.data.user;
        // console.log(user)
        setSendto(user);
      } catch (error) {
        alert("lawde nhi chal rh h");
      }
    };

    fetchRecieverData();
    fetchData();
  }, [room]);

  const handleTyping = async () => {
    clearTimeout(id);
    await socket.emit("isTyping", {
      room: room,
      typing: true,
    });
    id = setTimeout(async () => {
      await socket.emit("isTyping", { room: room, typing: false });
    }, 1000);
  };

  const handleDelete = async () => {
    const response = await axios.post("/api/messages/delete", { room: room });
    setMessageList("");
  };

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const formattedMinutes = String(minutes).padStart(2, "0");
      const time = `${hours}:${formattedMinutes}`;
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: time,
      };
      setIsTyping(false);
      await socket.emit("send_message", messageData);

      setMessageList((list) => [...list, messageData]);

      const response = await axios.post("api/messages/send", messageData);

      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    socket.on("typing_status", (data) => {
      setIsTyping(data.typing);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket, messageList]);

  return (
    <div className="w-[70%] h-[100%] ">
      {/* profile section of person */}

      <div className="h-[9.3%] flex flex-col pt-[0.5vw]">
        <div className="flex group hover:bg-opacity-[15%] transition-all duration-300 ease-linear flex-row  bg-transparent p-[0.35vw] rounded-[0.5vw] cursor-pointer h-full pl-[2vw] z-[1000]">
          <div className="w-[3.4vw] h-[3.4vw] border-[2px] rounded-full border-blue-600 relative">
            <Image
              src={avatar}
              className=" rounded-full group-hover:scale-105 transition-all duration-100 ease-linear"
              alt="User Avatar"
            />
            <div className="absolute inset-0 flex mt-[-2.75vw] mr-[-2.6vw] items-center justify-center z-10 rounded-full ">
              <div className="w-[1vw] h-[1vw] bg-green-500 rounded-full border-[2px] border-black" />
            </div>
          </div>

          <div className="ml-[1.5vw] flex flex-col pt-[0.1vw]">
            <div className="text-[1.2vw] font-semibold">{sendto.username}</div>
            <div className=" text-darkText text-[1vw] overflow-hidden  mt-[0.1vw]">
              Active
            </div>
          </div>
        </div>

        <div className="shadow-profile-bar z-[2]" />
      </div>

      <div
        style={{
          backgroundImage: "url('/anime2.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[100%] flex flex-col"
      >
        <div className="overflow-y-auto scrollbar-hide h-[82%] px-[2vw] pt-[2vw]">
          <div className=" w-[100%] bg-opacity-10 z-[-10] ">
            {messageList &&
              messageList.map((messageContent, index) => (
                <div
                  key={index}
                  className={`flex w-[100%]  ${
                    username === messageContent.author
                      ? "justify-end"
                      : "justify-start"
                  } peer`}
                >
                  <div
                    className={` flex flex-col items-end mt-[2vw] rounded-[0.5vw] min-w-[25%] max-w-[60%] `}
                  >
                    <div
                      className={`${
                        username === messageContent.author
                          ? "bg-blue-500"
                          : "bg-white bg-opacity-20"
                      } w-[95%] p-[1vw] rounded-[0.75vw] relative flex flex-row text-[1.25vw] justify-between break-words font-medium `}
                    >
                      <div>{messageContent.message}</div>
                      <div
                        onClick={() => {
                          if (toggle) setToggle(0);
                          else if (!toggle) setToggle(messageContent._id);
                        }}
                        className=" w-[1.1vw] p-[0.2vw] h-[1.1vw] rounded-[0.2vw] bg-gray-700 cursor-pointer flex "
                      >
                        <Image width={10} height={10} className="" src="/droparrow.svg"/>
                        <div className={`${
                            toggle === messageContent._id ? "flex" : "hidden"
                          } ml-[-8vw] px-[0.2vw] bg-gray-600 h-fit py-[0.50vw] rounded-[0.5vw]`}>
                        <div
                          onClick={() => handleDeleteOne(messageContent._id)}
                          className={` px-[1.75vw] py-[0.3vw] text-[1vw] text-gray-100 appearance-none rounded-[0.2vw]  hover:bg-blue-500`}
                        >
                          Delete
                        </div>
                        </div> 

                       
                      </div>
                    </div>

                    <div className="text-gray-100 z-10 mt-[-0.5vw] rounded-[1vw] p-[0.5vw] bg-darkBlack  text-[0.6vw] mr-[-0.75vw]">
                      {messageContent.time}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {isTyping && (
            <div className="flex flex-row items-center gap-[0.5vw]">
              <Image src={avatar} className="w-[3vw]" />
              <ThreeDots
                visible={true}
                height="15"
                width="60"
                color="#1F4AD2"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
        </div>

        <div className=" px-[0.75vw] pb-[0.5vw] bg-black bg-opacity-70 flex justify-center items-center gap-[0.75vw] w-[100%] py-[0.5vw]">
          <div className="text-[2vw] font-light flex items-center justify-center hover:cursor-pointer  px-[0.75vw]">
            +
          </div>

          <input
            type="text"
            value={currentMessage}
            placeholder="Type a message..."
            className="flex-1 py-[0.8vw] px-[1vw] bg- rounded-[1vw] bg-transparent border border-zinc-500 focus:outline-none  text-gray-200 "
            onChange={(event) => {
              setCurrentMessage(event.target.value);
              handleTyping();
            }}
            onKeyDown={(event) => event.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className=" rounded-[1.2vw]  flex justify-center items-center p-[1vw] bg-blue-500 text-white hover:bg-blue-600 text-[1.5vw]"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
