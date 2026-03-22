import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const demoBookings = [
  {
    id: 1,
    guestName: "Amit Sharma",
    roomNumber: "101",
    checkIn: "2025-08-10",
    checkOut: "2025-08-15",
    status: "Confirmed",
  },
  {
    id: 2,
    guestName: "Priya Verma",
    roomNumber: "205",
    checkIn: "2025-08-12",
    checkOut: "2025-08-14",
    status: "Pending",
  },
  {
    id: 3,
    guestName: "Raj Mehta",
    roomNumber: "309",
    checkIn: "2025-08-09",
    checkOut: "2025-08-12",
    status: "Cancelled",
  },
];

const statusColors = {
  Confirmed: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Cancelled: "bg-red-100 text-red-600",
};

export default function BookingManagement() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["Total", "Pending", "Confirmed", "Cancelled"].map((type) => (
          <div
            key={type}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
          >
            <h3 className="text-lg font-semibold">{type} Bookings</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {type === "Total"
                ? demoBookings.length
                : demoBookings.filter((b) => b.status === type).length}
            </p>
          </div>
        ))}
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Guest Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Room
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Check-In
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Check-Out
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Status
              </th>
              <th className="text-center py-3 px-4 font-semibold text-sm text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {demoBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{booking.guestName}</td>
                <td className="py-3 px-4">{booking.roomNumber}</td>
                <td className="py-3 px-4">{booking.checkIn}</td>
                <td className="py-3 px-4">{booking.checkOut}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      statusColors[booking.status]
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEye />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {demoBookings.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
