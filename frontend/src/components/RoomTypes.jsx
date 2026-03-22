import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const roomTypes = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with king-size bed, balcony & city view.",
    capacity: 2,
    price: 3500,
    amenities: ["AC", "WiFi", "TV", "Balcony"],
  },
  {
    id: 2,
    name: "Suite",
    description: "Luxury suite with living area, bathtub & premium service.",
    capacity: 4,
    price: 6000,
    amenities: ["AC", "WiFi", "TV", "Bathtub", "Mini Bar"],
  },
  {
    id: 3,
    name: "Standard Room",
    description: "Comfortable room with essential facilities.",
    capacity: 2,
    price: 2500,
    amenities: ["AC", "WiFi", "TV"],
  },
];

export default function RoomTypes() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Room Types</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow">
          + Add Room Type
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roomTypes.map((room) => (
          <div
            key={room.id}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-5"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {room.name}
              </h3>
              <div className="space-x-2 text-lg">
                <button className="text-green-600 hover:text-green-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-3 text-sm">{room.description}</p>

            <div className="mb-2">
              <span className="font-semibold">Capacity:</span> {room.capacity}{" "}
              persons
            </div>
            <div className="mb-2">
              <span className="font-semibold">Price:</span> ₹{room.price} / night
            </div>

            <div className="mt-3">
              <span className="font-semibold">Amenities:</span>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                {room.amenities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {roomTypes.length === 0 && (
        <p className="text-center text-gray-500 italic mt-10">
          No room types added yet.
        </p>
      )}
    </div>
  );
}
