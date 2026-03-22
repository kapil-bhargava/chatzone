// src/pages/RoomBooking.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaBed } from "react-icons/fa";

export default function RoomBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelName, hotelLocation, room } = location.state || {};

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const calculateDays = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end - start) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 0;
  };

  const totalPrice = calculateDays() * room?.price * guests;

  const handleBooking = () => {
    if (!checkIn || !checkOut || !userName || !userEmail) {
      alert("Please fill all fields");
      return;
    }
    alert("Booking Confirmed!");
    navigate("/"); // Redirect to homepage
  };

  if (!room) return <p className="p-6">Room data missing.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Booking</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">{room.type}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaMapMarkerAlt /> {hotelName}, {hotelLocation}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <FaBed /> Amenities: {room.amenities.join(", ")}
          </p>
          <p className="mt-2 text-gray-700 font-medium flex items-center gap-1">
            <FaRupeeSign /> {room.price} per night
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            className="border p-2 rounded"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Check-In"
          />
          <input
            type="date"
            className="border p-2 rounded"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Check-Out"
          />
          <input
            type="number"
            className="border p-2 rounded"
            value={guests}
            min={1}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder="Guests"
          />
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Your Full Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            className="border p-2 rounded"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div className="mb-4 text-right text-gray-800">
          <p className="text-lg font-semibold">
            Total Price: <FaRupeeSign className="inline" /> {totalPrice || 0}
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
