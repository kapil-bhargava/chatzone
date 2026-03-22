// controllers/messageController.js
const mongoose = require('mongoose');
const Message = require('../models/Message');

// ✅ Get all messages in a room
exports.getMessagesByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(roomId)) {
      return res.status(400).json({ message: 'Invalid room ID' });
    }

    const messages = await Message.find({ room: roomId })
      .populate('sender', 'username email')
      .sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error('❌ Error in getMessagesByRoom:', error);
    res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
  }
};

// ✅ Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { roomId, text } = req.body;

    if (!text || !roomId) {
      return res.status(400).json({ message: 'Message text and roomId are required' });
    }

    const message = await Message.create({
      text,
      sender: req.user._id, // From JWT via protect middleware
      room: roomId,
    });

    const populatedMessage = await message.populate('sender', 'username email');
    res.status(201).json(populatedMessage);
  } catch (error) {
    console.error('❌ Error in sendMessage:', error);
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};
