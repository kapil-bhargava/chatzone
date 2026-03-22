// server.js
// 🧠 Entry point of the backend application
// 🌐 Express Server + MongoDB + Socket.IO Chat Logic

const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const connectDB = require('./config/db');

// 🔐 Load environment variables from .env
dotenv.config();

// 🔌 Connect MongoDB
connectDB();

// 🏁 Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);

// 🌐 Middlewares
app.use(cors());
app.use(express.json());

// 🔄 Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/rooms', require('./routes/room'));
app.use('/api/messages', require('./routes/messages'));

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('Real-Time Chat Server is Running');
});

// 💬 Real-time communication using Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*', // You can restrict it later
    methods: ['GET', 'POST']
  }
});

// 🗣 Listen to client socket connections
io.on('connection', (socket) => {
  console.log(`🔌 User Connected: ${socket.id}`);

  // 📌 Join Room
  socket.on('join_room', (roomId) => {
    socket.join(roomId);
    console.log(`📥 Socket ${socket.id} joined room: ${roomId}`);
  });

  // 📤 Receive and broadcast message
  socket.on('send_message', async (data) => {
    const { room, content, senderId, timestamp } = data;

    // ✅ Save message in DB
    const Message = require('./models/Message');
    const newMessage = new Message({
      text: content,
      sender: senderId,
      room,
      timestamp
    });

    await newMessage.save();

    // 🔁 Emit to all clients in the room
    io.to(room).emit('receive_message', {
      text: content, // keep consistent key
      senderId,
      room,
      timestamp
    });
    console.log(`📤 Message sent to room ${room}:`, content);
  });

  // ❌ Handle disconnection
  socket.on('disconnect', () => {
    console.log(`❌ User Disconnected: ${socket.id}`);
  });
});

// 🚀 Launch server
const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on port ${PORT}`));
