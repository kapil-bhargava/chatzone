import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JoinRoom() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

const handleJoin = async () => {
  if (!roomName.trim()) return alert("Room name is required");

  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/rooms/search`,
      {
        params: { name: roomName },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const roomId = response.data._id; // Use room's MongoDB _id
    navigate(`/chat/${roomId}`);
  } catch (error) {
    console.error("Join Room Error:", error);
    alert(
      error.response?.data?.message || "Failed to join room"
    );
  }
};


  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Join an Existing Room
        </h2>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter Room Code"
          className="w-full px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
