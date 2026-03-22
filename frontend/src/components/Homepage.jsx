import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaSearch,
  FaBed,
  FaRupeeSign,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "The Taj Palace",
    location: "Delhi",
    rating: 4.8,
    image: "/images/taj.jpg",
    category: "Luxury",
    rooms: [
      {
        type: "Deluxe Room",
        price: 4500,
        available: true,
        amenities: ["WiFi", "AC", "TV"],
      },
      {
        type: "Suite",
        price: 7500,
        available: false,
        amenities: ["WiFi", "AC", "TV", "Mini Bar"],
      },
    ],
  },
  {
    id: 1,
    name: "The Taj Palace",
    location: "Delhi",
    rating: 4.8,
    image: "/images/taj.jpg",
    category: "Luxury",
    rooms: [
      {
        type: "Deluxe Room",
        price: 4500,
        available: true,
        amenities: ["WiFi", "AC", "TV"],
      },
      {
        type: "Suite",
        price: 7500,
        available: false,
        amenities: ["WiFi", "AC", "TV", "Mini Bar"],
      },
    ],
  },
  {
    id: 1,
    name: "The Taj Palace",
    location: "Delhi",
    rating: 4.8,
    image: "/images/taj.jpg",
    category: "Luxury",
    rooms: [
      {
        type: "Deluxe Room",
        price: 4500,
        available: true,
        amenities: ["WiFi", "AC", "TV"],
      },
      {
        type: "Suite",
        price: 7500,
        available: false,
        amenities: ["WiFi", "AC", "TV", "Mini Bar"],
      },
    ],
  },
  {
    id: 2,
    name: "Hotel Lakeview",
    location: "Udaipur",
    rating: 4.5,
    image: "/images/lakeview.jpg",
    category: "Heritage",
    rooms: [
      {
        type: "Lake View Room",
        price: 5000,
        available: true,
        amenities: ["WiFi", "AC", "Lake View"],
      },
      {
        type: "Heritage Suite",
        price: 8000,
        available: true,
        amenities: ["WiFi", "AC", "TV", "Mini Bar"],
      },
    ],
  },
];

export default function Home() {


  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Find & Book Available Rooms
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <FaMapMarkerAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter city or location"
            className="border p-2 rounded w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full md:w-2/3">
          <input type="date" className="border p-2 rounded w-full" />
          <input type="date" className="border p-2 rounded w-full" />
          <input
            type="number"
            placeholder="Guests"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          <FaSearch />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {hotel.name}
                </h2>
                <span className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {hotel.rating}
                </span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <FaMapMarkerAlt /> {hotel.location}
              </p>

              <div className="mt-4">
                <h3 className="text-md font-medium text-gray-700">
                  Available Rooms
                </h3>
                {hotel.rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`mt-2 p-3 border rounded-lg ${
                      room.available
                        ? "border-green-400"
                        : "border-gray-300 opacity-60"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">
                          {room.type}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <FaRupeeSign /> {room.price} / night
                        </span>
                        <span className="text-xs text-gray-400">
                          Amenities: {room.amenities.join(", ")}
                        </span>
                      </div>
                      {room.available ? (
                        <button
                          onClick={() =>
                            navigate("/booking", {
                              state: {
                                hotelName: hotel.name,
                                hotelLocation: hotel.location,
                                room,
                              },
                            })
                          }
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Book Now
                        </button>
                      ) : (
                        <span className="text-red-500 text-sm font-medium">
                          Not Available
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
