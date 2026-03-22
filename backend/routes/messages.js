// routes/messages.js
// 💬 Fetch messages for a room

const express = require('express');
const router = express.Router();
const { getMessagesByRoom ,sendMessage } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

// ✅ @route   GET /api/messages/:roomId
// ✅ @access  Private (protected route with JWT)
router.get('/:roomId', protect, getMessagesByRoom);


// ✅ Send a new message (POST)
router.post('/', protect, sendMessage);

module.exports = router;
