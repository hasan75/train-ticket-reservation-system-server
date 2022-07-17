const mongoose = require('mongoose');
require('dotenv').config();

//init database
const database = {};

database.uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4dxux.mongodb.net/?retryWrites=true&w=majority`;

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
