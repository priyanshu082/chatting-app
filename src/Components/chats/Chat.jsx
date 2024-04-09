import React, { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";

function Chat({ socket, username, room,receiver}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/messages/get", { room: room });
        console.log(response.data);
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
      await socket.emit("send_message", messageData);//emitting message to the server
      setMessageList((list) => [...list, messageData]);
      const response = await axios.post("api/messages/send", messageData);
      console.log(response);
      setCurrentMessage("");
    }
  };
  const deleteChat = async () => {
    try {
      const response = await axios.post(`/api/messages/delete`, { room: room });
      console.log(response);

      // After successful deletion, update the messageList state to an empty array
      setMessageList([]);
    } catch (error) {
      console.error("Error deleting chats:", error);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);//lsstenning to server for new messages
    });

    return () => {
      // Cleanup function to prevent memory leaks
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className="chat-window bg-gray-100 rounded-lg overflow-hidden shadow-md w-full">
      <div className="chat-header bg-gray-200 p-4 flex justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-700">Live Chat</p>
          <p className="text-black">{receiver}</p>
        </div>
        <div>
          <button
            onClick={deleteChat}
            className="text-black border border-gray-300 rounded-full px-4 py-2 transition duration-300 ease-in-out hover:border-gray-400 focus:outline-none bg-blue-20 hover:bg-red-500 hover:text-white"
          >
            Delete this chat
          </button>
        </div>
      </div>
      <div className="chat-body h-64 overflow-y-auto">
        <ScrollToBottom className="message-container">
          {messageList &&
            messageList.map((messageContent, index) => (
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
                    <p className="text-xs text-gray-500">
                      {messageContent.time}
                    </p>
                    <p className="text-xs text-gray-700 ml-2">
                      {messageContent.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div ref={messagesEndRef} />
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
