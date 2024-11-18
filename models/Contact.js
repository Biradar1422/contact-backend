// models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
}, { 
  timestamps: true // This will add createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Contact', ContactSchema);
