// 1️⃣ Hotel Management Component
// import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

export default function HotelManagement() {
  const hotels = [
    {
      id: 1,
      name: "The Taj Palace",
      manager: "Rajesh Kumar",
      location: "Delhi",
      status: "Active",
    },
    {
      id: 2,
      name: "Oberoi Grand",
      manager: "Anita Sharma",
      location: "Kolkata",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Leela Palace",
      manager: "Vikram Singh",
      location: "Bengaluru",
      status: "Active",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hotel Management</h2>
      <table className="w-full border shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Hotel Name</th>
            <th className="p-3">Manager</th>
            <th className="p-3">Location</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr
              key={hotel.id}
              className="border-t hover:bg-gray-50 transition duration-150"
            >
              <td className="p-3 font-medium">{hotel.name}</td>
              <td className="p-3">{hotel.manager}</td>
              <td className="p-3">{hotel.location}</td>
              <td className="p-3">
                {/* <Badge
                  className={
                    hotel.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }
                >
                  {hotel.status}
                </Badge> */}
              </td>
              <td className="p-3 text-right space-x-3">
                <button>
                  <Pencil className="h-4 w-4 text-blue-500" />
                </button>
                <button>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
