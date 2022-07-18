const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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

//errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Server Error!';

  // console.log(res, 'res');

  res.status(err.statusCode).json({
    status: err,
    message: err.message,
  });
});

//for checking server
app.get('/', (req, res) => {
  res.send('Train Ticket Reservation System Server Running');
});

app.listen(port, () => {
  console.log('Application is running on Port:', port);
});
