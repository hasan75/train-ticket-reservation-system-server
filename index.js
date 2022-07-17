const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
  res.send('Train Ticket Reservation System Server Running');
});

app.listen(port, () => {
  console.log('Application is running on Port:', port);
});
