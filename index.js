const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

//database
const database = require('./database/database');
//formSubmit
const formSubmit = require('./routes/formSubmit');

const app = express();
const port = process.env.PORT || 5050;

//middlewares
app.use(cors());
app.use(express.json());

// trainTicketReservation
// TORxXNbuffa4piDM

// database connect
database.connect();

app.use('/formSubmit', formSubmit);

//for checking server
app.get('/', (req, res) => {
  res.send('Train Ticket Reservation System Server Running');
});

app.listen(port, () => {
  console.log('Application is running on Port:', port);
});
