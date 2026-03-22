import React from "react";
import { FaBed, FaDoorOpen, FaTools, FaCheckCircle } from "react-icons/fa";

const roomStats = [
  {
    title: "Total Rooms",
    value: 120,
    icon: <FaBed className="text-blue-600 text-xl" />,
    bg: "bg-blue-100",
  },
  {
    title: "Occupied Rooms",
    value: 74,
    icon: <FaCheckCircle className="text-green-600 text-xl" />,
    bg: "bg-green-100",
  },
  {
    title: "Available Rooms",
    value: 36,
    icon: <FaDoorOpen className="text-yellow-600 text-xl" />,
    bg: "bg-yellow-100",
  },
  {
    title: "Under Maintenance",
    value: 10,
    icon: <FaTools className="text-red-600 text-xl" />,
    bg: "bg-red-100",
  },
];

const roomData = [
  {
    id: "R001",
    type: "Deluxe Suite",
    status: "Occupied",
    price: "₹4,500",
    guest: "Aarav Mehta",
  },
  {
    id: "R002",
    type: "Standard Room",
    status: "Available",
    price: "₹2,800",
    guest: "-",
  },
  {
    id: "R003",
    type: "Executive Room",
    status: "Maintenance",
    price: "₹3,600",
    guest: "-",
  },
  {
    id: "R004",
    type: "Luxury Suite",
    status: "Occupied",
    price: "₹5,200",
    guest: "Sneha Patil",
  },
  {
    id: "R005",
    type: "Standard Room",
    status: "Available",
    price: "₹2,800",
    guest: "-",
  },
];

export default function RoomManagement() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Room Management</h1>
        <p className="text-sm text-gray-500">Monitor and manage hotel room statuses</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {roomStats.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 rounded-lg shadow-sm ${card.bg}`}
          >
            <div>{card.icon}</div>
            <div>
              <p className="text-sm text-gray-700">{card.title}</p>
              <p className="text-xl font-bold text-gray-800">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Room Table */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Room List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-left">
                <th className="p-3">Room ID</th>
                <th className="p-3">Room Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Guest</th>
                <th className="p-3">Price/Night</th>
              </tr>
            </thead>
            <tbody>
              {roomData.map((room, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3">{room.id}</td>
                  <td className="p-3">{room.type}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        room.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : room.status === "Occupied"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td className="p-3">{room.guest}</td>
                  <td className="p-3">{room.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
