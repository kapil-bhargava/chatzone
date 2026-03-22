// routes/rooms.js
// 🏠 Room creation and fetching

const express = require('express');
const router = express.Router();
const { createRoom, getAllRooms, findRoomByName } = require('../controllers/roomController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/rooms
router.post('/', protect, createRoom);

// @route   GET /api/rooms
router.get('/', getAllRooms);


// ✅ Find room by name
router.get('/search', protect, findRoomByName);


module.exports = router;
