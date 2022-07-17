const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

//middlewares
app.use(cors());
app.use(express.json());

// trainTicketReservation
// TORxXNbuffa4piDM

//url for database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4dxux.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // await client.connect((err) => {
    //   const collection = client
    //     .db('TicektReservation')
    //     .collection('Reservation');
    //   console.log('Database Connected');
    //   console.error(err);
    // });
    await client.connect();
    const database = client.db('TicektReservation');
    const reservation_collection = database.collection('Reservation');
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Train Ticket Reservation System Server Running');
});

app.listen(port, () => {
  console.log('Application is running on Port:', port);
});
