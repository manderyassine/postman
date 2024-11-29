// models/User.js
const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model('User', UserSchema);
