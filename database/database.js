const mongoose = require('mongoose');
require('dotenv').config();

//init database
const database = {};

database.uri = `mongodb+srv://TrainTicketReservation:${process.env.DB_PASS}@cluster0.m6psz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

database.connect = () => {
  mongoose
    .connect(database.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('database connected');
    })
    .catch((err) => {
      console.log('Error on connecting Database,', err);
    });
};

module.exports = database;
