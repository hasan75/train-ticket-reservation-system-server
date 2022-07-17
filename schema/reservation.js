const mongoose = require('mongoose');

//schema
const reservationFormSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    select: true,
  },
  Gender: {
    type: String,
    required: false,
    select: true,
  },
  From: {
    type: String,
    required: true,
    select: true,
  },
  To: {
    type: String,
    required: true,
    select: true,
  },
  Date: {
    type: String,
    required: true,
    select: true,
  },
  Time: {
    type: String,
    required: true,
    select: true,
  },
  TicketFare: {
    type: String,
    required: true,
    select: true,
  },
  Note: {
    type: String,
    required: true,
    select: true,
  },
});

const reservation = mongoose.model('reservation', reservationFormSchema);

module.exports = reservation;
