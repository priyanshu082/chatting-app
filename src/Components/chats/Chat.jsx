import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { IoSend } from "react-icons/io5";

function Chat({ socket, username, room, reciever }) {
 
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [sendto,setSendto]=useState({})
 

  // useEffect(()=>{
  //   const fetchData=async(username)
  // })

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

    const fetchRecieverData=async ()=>{
      try {
        const response = await axios.post(`/api/users/reciever`,reciever);
        const user=response.data.user
        // console.log(user)
         setSendto(user)
      
        
      } catch (error) {
        alert("lawde nhi chal rh h")
      }
    }

    fetchRecieverData();
    fetchData();
  }, [room]);

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const hours = new Date().getHours()
      const minutes = new Date().getMinutes();
      const formattedMinutes = String(minutes).padStart(2, '0');
      const time = `${hours}:${formattedMinutes}`;
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
       
        time:time,
      };

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

    return () => {
      // Cleanup function to prevent memory leaks
      socket.off("receive_message");
    };
  }, [socket]);


  console.log(sendto)

  return (
    <div className="w-[70%] h-[100%]">
      {/* profile section of person */}
      <div className="h-[8%] flex flex-col">
        <div>

        </div>
        <div>

          </div>
      </div>

      {/* message section */}
      {/* <div className="h-[80%] overflow-y-auto bg-white bg-opacity-50 w-[100%] ">
        {messageList &&
          messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`flex flex-col w-[100%] justify-center ${
                username === messageContent.author ? "items-end" : "items-start"
              } `}
            >
              <div
                className={` ${
                  username === messageContent.author
                    ? "bg-blue-700"
                    : "bg-white bg-opacity-40"
                }  mt-[1vw] max-w-[80%]`}
              >
                <div className="w-[20vw] flex ">{messageContent.message}</div>
              </div>
            </div>
          ))}
      </div> */}

      <div className="h-[81%] p-[2vw] overflow-y-auto scrollbar-hide bg-black w-[100%] bg-opacity-10 ">
        {messageList &&
          messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`flex w-[100%] ${
                username === messageContent.author ? "justify-end" : "justify-start"
              } `}
            >
              <div
                className={` flex flex-col items-end mt-[2vw] rounded-[0.5vw] min-w-[15%] max-w-[60%]`}
              >
                <div className={`${
                  username === messageContent.author
                    ? "bg-blue-500"
                    : "bg-white bg-opacity-10"
                } w-[95%] p-[1vw] rounded-[0.75vw] break-words`}> 

                <div className=" ">
                 {messageContent.message}
                  </div>
                 
                  
                </div>
 <div className="text-gray-100  mt-[-0.5vw] rounded-[1vw] p-[0.5vw] bg-darkBlack mr-[0.5vw] text-[0.6vw]">{messageContent.time}
                  </div>

                  </div>
            </div>
          ))}
      </div>

      <div className=" p-[0.75vw] flex items-center gap-[0.75vw] w-[94%]">
        <div className="text-[2.5vw] font-light flex items-center justify-center ">
          +
        </div>

        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message..."
          className="flex-1 py-[0.4vw] px-[1vw] rounded-[1vw] bg-transparent border border-zinc-700 focus:outline-none text-gray-200 mt-[0.5vw]"
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="pr-[0.35] mt-[0.5vw] p-[0.6vw] flex justify-center items-center rounded-full bg-blue-500 text-white hover:bg-blue-600 text-[1.25vw]"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default Chat;
