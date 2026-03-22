// models/User.js
// 👤 Mongoose schema for user authentication

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate usernames
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique emails
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Auto-manage createdAt and updatedAt

module.exports = mongoose.model('User', userSchema);
