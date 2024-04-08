import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
function Chat({ socket, username, room,sender }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/messages/get", { room: room });
        console.log(response.data);
  
        // Ensure response.data.messages is an array before setting messageList
        if (Array.isArray(response.data.messages)) {
          setMessageList(response.data.messages);
        } else {
          console.error("Messages data is not an array:", response.data.messages);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchData();
  }, [room]);
  
  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      const response = await axios.post("api/messages/send", messageData);
      console.log(response);
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
  return (
    <div className="chat-window bg-gray-100 rounded-lg overflow-hidden shadow-md w-full">
      <div className="chat-header bg-gray-200 p-4">
        <p className="text-lg font-semibold text-slate-700">Live Chat</p>
        <p className="text-black">{username}</p>
        {/* <p className="text-black">{room}</p> */}
      </div>
      <div className="chat-body h-64 overflow-y-auto">
        <ScrollToBottom className="message-container">
          {messageList && messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`message ${
                username === messageContent.author ? "self" : "other"
              }`}
            >
              <div className="flex flex-col">
                <div className="message-content bg-white p-2 rounded-lg">
                  <p className="text-black">{messageContent.message}</p>
                </div>
                <div className="message-meta flex justify-end mt-1">
                  <p className="text-xs text-gray-500">{messageContent.time}</p>
                  <p className="text-xs text-gray-700 ml-2">
                    {messageContent.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer bg-gray-200 p-4 flex items-center">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message..."
          className="flex-1 py-2 px-4 rounded-full bg-white border border-gray-300 focus:outline-none text-black"
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
