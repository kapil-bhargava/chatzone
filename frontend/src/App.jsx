import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/Joinroom";
import ChatRoom from "./pages/Chatroom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminSidebar from "./components/AdminSidebar";
// import AdminDashboard from "./components/AdminDashboard";

import HotelList from "./components/HotelList";
import ManageRooms from "./components/ManageRooms";
import BookingManagement from "./components/Bookings";
import ManageUsers from "./components/ManageUsers";
import AdminDashboard from "./components/sidebar";
import UserManagement from "./components/UserManagement";
import RoomTypes from "./components/RoomTypes";
import Reviews from "./components/Reviews";
import Settings from "./components/Settinngs";
import HotelHomePage from "./components/Homepage";
import RoomBooking from "./components/UserBookings";
import HotelDetails from "./components/HotelDetail";

function App() {
    // const location = useLocation();
  // const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createroom" element={<CreateRoom />} />
      <Route path="/joinroom" element={<JoinRoom />} />
      <Route path="/chat/:roomId" element={<ChatRoom />} />
    </Routes>
    //  <div className="flex">
    //   {isAdminPage && <AdminSidebar />}
    //   <div
    //     className={`flex-1 min-h-screen overflow-y-scroll ${
    //       isAdminPage ? "bg-gray-50 ml-65" : "bg-white"
    //     }`}
    //   >
    //     <Routes>
    //       {/* ✅ Admin Routes */}
    //       <Route path="/admin/dashboard" element={<AdminDashboard />} />
    //       <Route path="/admin/hotels" element={<HotelList />} />
    //       <Route path="/admin/rooms" element={<ManageRooms />} />
    //       <Route path="/admin/room-types" element={<RoomTypes />} />
    //       <Route path="/admin/bookings" element={<BookingManagement />} />
    //       <Route path="/admin/users" element={<UserManagement />} />
    //       <Route path="/admin/reviews" element={<Reviews />} />
    //       <Route path="/admin/settings" element={<Settings />} />

    //       {/* ✅ User Routes */}
    //       <Route path="/" element={<HotelHomePage />} />
    //       <Route path="/booking" element={<RoomBooking />} />
    //       <Route path="/hoteldetails" element={<HotelDetails />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default App;
