const mongoose = require('mongoose');
const moment = require('moment');

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true,
  },
  bankAccountNo: {
    type: Number,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: false
  },
  addressLine2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  zipCode: {
    type: Number,
    required: false
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
