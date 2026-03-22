import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

// 🌐 Connect to backend socket server
const socket = io(import.meta.env.VITE_API_URL); // e.g., http://localhost:5000

export default function ChatRoom() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  // const [mytoken, setToken] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const isValidRoomId = /^[a-f\d]{24}$/i.test(roomId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 📨 Fetch existing messages
  const fetchMessages = async () => {
 
    try {
      const token = localStorage.getItem("token");
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (!token || !localUser) return;

      setUser(localUser);

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/messages/${roomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const formatted = res.data.map((msg) => ({
        text: msg.text,
        sender: msg.sender._id === localUser._id ? "you" : "receiver",
        time: new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      setMessages(formatted);
      scrollToBottom();
    } catch (err) {
      console.error("❌ Error fetching messages:", err);
    }
  };


useEffect(() => {
  if (!isValidRoomId) return;

  socket.emit("join_room", roomId);
  fetchMessages();
  inputRef.current?.focus();

  const localUser = JSON.parse(localStorage.getItem("user"));

  // 📥 Listen for real-time incoming messages
  socket.on("receive_message", (data) => {
    const formattedMessage = {
      text: data.text,
      sender: data.senderId === localUser._id ? "you" : "receiver",
      time: new Date(data.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // ✅ Only add if not already pushed in optimistic UI
    setMessages((prev) => [...prev, formattedMessage]);
    scrollToBottom();
  });

  // 🧹 Clean up on unmount or room change
  return () => {
    socket.off("receive_message");
  };
}, [roomId]);




  // ============ Sending message ============ 
  const handleSend = async () => {
    if (!input.trim() || !user) return;

    const timestamp = new Date().toISOString();
    const messageData = {
      room: roomId,
      content: input,
      senderId: user._id,
      timestamp,
    };

    try {
      // Send message to backend and broadcast via socket
      socket.emit("send_message", messageData);

      // Optimistic UI update (optional)
      // setMessages((prev) => [
      //   ...prev,
      //   {
      //     text: input,
      //     sender: user._id,
      //     time: new Date(timestamp).toLocaleTimeString([], {
      //       hour: "2-digit",
      //       minute: "2-digit",
      //     }),
      //   },
      // ]);

      setInput("");
      scrollToBottom();
    } catch (err) {
      console.error("❌ Error sending message:", err);
    }
  };

  return (
    <>
      <div className="z-10 fixed left-0 top-0 w-full bg-blue-600 text-white p-4 font-semibold text-lg shadow-md">
        Room ID: {roomId} &nbsp; Connected to :{}
        <br />
        Me: {user?.username}
      </div>

      <div className="min-h-screen pt-20  flex flex-col bg-blue-100">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-scroll p-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500">No messages yet</div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm shadow ${
                  msg.sender === "you"
                    ? "bg-green-200 text-right"
                    : "bg-white text-left"
                }`}
              >
                <div>{msg.text}</div>
                <div className="text-[10px] text-gray-500 mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white flex gap-2 shadow-inner sticky bottom-0">
          <input
            type="text"
            ref={inputRef}
            className="flex-1 px-4 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
