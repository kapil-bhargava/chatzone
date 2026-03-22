import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const demoUsers = [
  {
    id: 1,
    name: "Rohit Kumar",
    email: "rohit.kumar@example.com",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: 2,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    phone: "9123456789",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Arjun Meena",
    email: "arjun.meena@example.com",
    phone: "9988776655",
    status: "Blocked",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-600",
  Inactive: "bg-yellow-100 text-yellow-600",
  Blocked: "bg-red-100 text-red-600",
};

export default function UserManagement() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["Total", "Active", "Inactive", "Blocked"].map((type) => (
          <div
            key={type}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
          >
            <h3 className="text-lg font-semibold">{type} Users</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {type === "Total"
                ? demoUsers.length
                : demoUsers.filter((u) => u.status === type).length}
            </p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Email
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                Phone
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
            {demoUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      statusColors[user.status]
                    }`}
                  >
                    {user.status}
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
            {demoUsers.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
