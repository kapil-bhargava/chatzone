import React from "react";
import { FaCheckCircle, FaTrashAlt, FaStar } from "react-icons/fa";

const demoReviews = [
  {
    id: 1,
    guest: "Riya Singh",
    roomType: "Deluxe Room",
    rating: 4,
    review: "Had a pleasant stay. Staff was friendly and room was clean.",
    date: "2025-08-05",
    status: "Pending",
  },
  {
    id: 2,
    guest: "Manish Gupta",
    roomType: "Suite",
    rating: 5,
    review: "Absolutely amazing experience! Highly recommended.",
    date: "2025-08-01",
    status: "Approved",
  },
  {
    id: 3,
    guest: "Neha Joshi",
    roomType: "Standard Room",
    rating: 3,
    review: "Room was decent but washroom could be better.",
    date: "2025-07-30",
    status: "Pending",
  },
];

const statusColors = {
  Approved: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
};

export default function Reviews() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>

      <div className="space-y-6">
        {demoReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-5"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.guest}
                </h3>
                <p className="text-sm text-gray-500">{review.roomType}</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  statusColors[review.status]
                }`}
              >
                {review.status}
              </span>
            </div>

            <div className="flex items-center text-yellow-500 mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm mb-3">"{review.review}"</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Reviewed on: {review.date}</span>
              <div className="space-x-2 text-base">
                {review.status === "Pending" && (
                  <button className="text-green-600 hover:text-green-800">
                    <FaCheckCircle title="Approve" />
                  </button>
                )}
                <button className="text-red-600 hover:text-red-800">
                  <FaTrashAlt title="Delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {demoReviews.length === 0 && (
          <p className="text-center text-gray-500 italic">
            No reviews available.
          </p>
        )}
      </div>
    </div>
  );
}
