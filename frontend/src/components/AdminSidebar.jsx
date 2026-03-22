import { FaHotel, FaUsers, FaMoneyBill, FaRegCalendarAlt } from 'react-icons/fa';
import { MdDashboard, MdRateReview, MdOutlineRoomPreferences, MdSupport } from 'react-icons/md';
import { RiCoupon2Fill } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', icon: <MdDashboard />, path: '/admin/dashboard' },
  { label: 'Manage Rooms', icon: <FaHotel />, path: '/admin/rooms' },
  { label: 'Room Types', icon: <MdOutlineRoomPreferences />, path: '/admin/room-types' },
  { label: 'Bookings', icon: <FaRegCalendarAlt />, path: '/admin/bookings' },
  { label: 'Users', icon: <FaUsers />, path: '/admin/users' },
  { label: 'Reviews', icon: <MdRateReview />, path: '/admin/reviews' },
  { label: 'Offers & Coupons', icon: <RiCoupon2Fill />, path: '/admin/offers' },
  { label: 'Payments', icon: <FaMoneyBill />, path: '/admin/payments' },
  { label: 'Support Requests', icon: <MdSupport />, path: '/admin/support' },
  { label: 'Settings', icon: <IoSettingsOutline />, path: '/admin/settings' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen fixed left-0 top-0 bg-white border-r shadow-md">
      <div className="p-5 text-xl font-bold border-b text-indigo-600">Hotel Admin</div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={clsx(
              'flex items-center gap-3 px-5 py-3 hover:bg-indigo-50 text-gray-700 transition',
              location.pathname === item.path && 'bg-indigo-100 font-semibold text-indigo-700'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
