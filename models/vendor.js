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
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;
