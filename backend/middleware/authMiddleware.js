// middleware/authMiddleware.js
// 🔐 Protect routes with JWT

const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.protect = async (req, res, next) => {
  let token;

  // ✅ Check for Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // 🔓 Extract token
      token = req.headers.authorization.split(' ')[1];

      // 🔍 Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded?.id) {
        return res.status(401).json({ message: 'Invalid token payload' });
      }

      // 👤 Attach user to request
      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = user;
      next(); // ✅ Proceed to protected route
    } catch (error) {
      console.error('Auth Error:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};
