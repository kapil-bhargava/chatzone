import {
  FaUsers,
  FaHotel,
  FaRupeeSign,
  FaRegCalendarCheck,
} from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    icon: <FaRegCalendarCheck />,
    title: 'Total Bookings',
    value: '1,248',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <FaHotel />,
    title: 'Available Rooms',
    value: '78',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: <FaUsers />,
    title: 'Total Users',
    value: '569',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: <FaRupeeSign />,
    title: 'Total Revenue',
    value: '₹6,42,000',
    color: 'bg-purple-100 text-purple-700',
  },
];

const bookingStats = [
  { month: 'Jan', bookings: 120 },
  { month: 'Feb', bookings: 160 },
  { month: 'Mar', bookings: 200 },
  { month: 'Apr', bookings: 240 },
  { month: 'May', bookings: 300 },
  { month: 'Jun', bookings: 275 },
];

const recentBookings = [
  {
    name: 'Aarav Mehta',
    date: '2025-08-03',
    room: 'Deluxe Suite',
    status: 'Confirmed',
  },
  {
    name: 'Priya Sharma',
    date: '2025-08-02',
    room: 'Executive Room',
    status: 'Pending',
  },
  {
    name: 'Rahul Verma',
    date: '2025-08-01',
    room: 'Standard Room',
    status: 'Cancelled',
  },
  {
    name: 'Sneha Patil',
    date: '2025-07-30',
    room: 'Luxury Suite',
    status: 'Confirmed',
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's the latest update.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 rounded-lg shadow-sm ${card.color}`}
          >
            <div className="text-2xl">{card.icon}</div>
            <div>
              <p className="text-sm">{card.title}</p>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Stats */}
      <div className="bg-white p-5 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Monthly Booking Stats</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={bookingStats}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-2 text-left">Customer</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Room</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">{booking.name}</td>
                  <td className="p-2">{booking.date}</td>
                  <td className="p-2">{booking.room}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Confirmed'
                          ? 'bg-green-100 text-green-700'
                          : booking.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
