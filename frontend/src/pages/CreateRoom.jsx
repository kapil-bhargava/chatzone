import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateRoom() {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();
const handleCreate = async () => {
  if (!roomName.trim()) return alert('Room name is required');

  try {
    const token = localStorage.getItem("token"); // Get token from localStorage

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/rooms`,
      { name: roomName }, // send room name to backend
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
        },
      }
    );

    const roomId = res.data._id; // ✅ MongoDB _id from response

    // ✅ Navigate to the newly created room using _id
    navigate(`/chat/${roomId}`);
  } catch (err) {
    console.error("Create Room Error:", err);
    alert(err.response?.data?.message || "Failed to create room");
  }
};



  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Create a New Room</h2>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter Room Name"
          className="w-full px-4 py-3 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />
        <button
          onClick={handleCreate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Create Room
        </button>
      </div>
    </div>
  );
}
