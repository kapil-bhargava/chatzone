import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaSwimmingPool,
  FaConciergeBell,
  FaBed,
  FaCheckCircle,
} from "react-icons/fa";
import bannerpic from "../assets/hotelnikols.jpg";
import g1 from "../assets/lux1488ex-202486-Hotel Exterior - night (1).avif";
import g2 from "../assets/luxury-hotel-bedroom-design.jpg";
import g3 from "../assets/seaviewhotel.webp";

export default function HotelDetails() {
  const hotel = {
    name: "The Taj Palace",
    location: "New Delhi, India",
    rating: 4.9,
    bannerImage: bannerpic,
    description:
      "Immerse yourself in luxury at The Taj Palace, a 5-star haven located in the heart of New Delhi. This royal retreat blends elegance, comfort, and service excellence with traditional charm.",
    amenities: [
      { icon: FaWifi, name: "Free Wi-Fi" },
      { icon: FaSnowflake, name: "Air Conditioning" },
      { icon: FaTv, name: "Smart TV" },
      { icon: FaSwimmingPool, name: "Swimming Pool" },
      { icon: FaConciergeBell, name: "24x7 Room Service" },
      { icon: FaBed, name: "King Size Beds" },
    ],
    gallery: [g1, g2, g3],
    rooms: [
      {
        type: "Deluxe Room",
        price: 4999,
        image: g1,
        available: true,
        amenities: ["WiFi", "AC", "Smart TV"],
      },
      {
        type: "Executive Suite",
        price: 8999,
        image: g2,
        available: true,
        amenities: ["WiFi", "AC", "Smart TV", "Mini Bar"],
      },
    ],
    reviews: [
      {
        name: "Amit Sharma",
        rating: 5,
        comment:
          "Exceptional stay! Loved the service and rooms were top-notch.",
      },
      {
        name: "Pooja Mehra",
        rating: 4.5,
        comment: "Beautiful hotel and warm hospitality. Highly recommended!",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Hero Banner */}
      <div className="relative">
        <img
          src={hotel.bannerImage}
          alt={hotel.name}
          className="w-full h-80 object-cover rounded-xl shadow"
        />
        <div className="absolute bottom-5 left-5 bg-white/90 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <FaMapMarkerAlt /> {hotel.location}
          </p>
          <p className="text-yellow-500 flex items-center gap-1 mt-1 text-lg">
            <FaStar /> {hotel.rating}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          About the Hotel
        </h2>
        <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hotel.amenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-700 bg-gray-100 p-3 rounded-md"
            >
              <item.icon className="text-blue-600" /> {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {hotel.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              className="rounded-lg w-full h-48 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Rooms */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Rooms
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hotel.rooms.map((room, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{room.type}</h3>
                <p className="text-gray-600 mt-1">₹{room.price} / night</p>
                <div className="text-sm text-gray-500 mt-2">
                  <strong>Amenities:</strong> {room.amenities.join(", ")}
                </div>
                <div className="mt-3">
                  {room.available ? (
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Book Now
                    </button>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Not Available
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Guest Reviews
        </h2>
        <div className="space-y-4">
          {hotel.reviews.map((review, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-md shadow">
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-yellow-500 flex items-center gap-1 text-sm">
                <FaStar /> {review.rating}
              </p>
              <p className="text-gray-600 mt-1">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
          Book Your Stay at {hotel.name}
        </button>
      </div>
    </div>
  );
}
