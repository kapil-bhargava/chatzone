// controllers/roomController.js
// 🏠 Create and get chat rooms

const Room = require('../models/Room');

// 📌 Create a new room
exports.createRoom = async (req, res) => {
  try {
    console.log('USER:', req.user); // 👀 Log this to terminal

    const { name } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: User not found in request' });
    }

    const newRoom = new Room({
      name,
      users: [req.user.id],
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    console.error(error); // Show actual error in terminal
    res.status(500).json({ message: 'Failed to create room' });
  }
};


// 📌 Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('users', 'username email');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms' });
  }
};


// ✅ Find room by name
exports.findRoomByName = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Room name is required' });
  }

  try {
    const room = await Room.findOne({ name });

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    res.json(room);
  } catch (error) {
    console.error('Find Room Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};