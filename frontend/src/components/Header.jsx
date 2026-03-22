import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, [isLoggedIn]);

  // ✅ Logout handler
  const handleLogout = () => {
    if(!window.confirm("Are you sure you want to logout?")){
      return 
    }

    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-600 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="text-white hover:text-indigo-200 transition">
            💬 ChatApp
          </Link>
        </h1>

        <nav className="space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 bg-white text-indigo-600 rounded hover:bg-indigo-100 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-indigo-600 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-300 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
