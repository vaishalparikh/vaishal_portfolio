const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  },
}, { collection: 'contactDetail' });

module.exports = mongoose.model('contactDetail', ContactSchema);