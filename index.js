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

    // 10 digit random number
    const randomNumberof10 = () => {
      return Math.floor(Math.random() * 10000000000);
    };

    // adding reservation
    app.post('/formSubmit', async (req, res, next) => {
      try {
        // console.log(req.body);
        console.log(res);
        // const Name =
        //   typeof req.body.Name === 'string' && req.body.Name.length > 0
        //     ? req.body.Name
        //     : false;

        // const Gender =
        //   typeof req.body.Gender === 'string' && req.body.Gender.length > 0
        //     ? req.body.Gender
        //     : false;

        // const From =
        //   typeof req.body.From === 'string' && req.body.From.length > 0
        //     ? req.body.From
        //     : false;

        // const To =
        //   typeof req.body.To === 'string' && req.body.To.length > 0
        //     ? req.body.To
        //     : false;

        // const Date =
        //   typeof req.body.Date === 'string' && req.body.Date.length > 0
        //     ? req.body.Date
        //     : false;

        // const Time =
        //   typeof req.body.Time === 'string' && req.body.Time.length > 0
        //     ? req.body.Time
        //     : false;

        // const TicketFare =
        //   typeof req.body.TicketFare === 'string' &&
        //   req.body.TicketFare.length > 0
        //     ? req.body.TicketFare
        //     : false;

        // const Note =
        //   typeof req.body.Note === 'string' && req.body.Note.length > 0
        //     ? req.body.Note
        //     : false;

        // if (Name && From && To && Date && Time && TicketFare && Note) {
        //   const reservation = await reservation_collection.findOne({ Name });
        //   if (reservation) {
        //     res.status(400).json({
        //       status: 'Error!!',
        //       message: 'This name already exists',
        //     });
        //   } else {
        //     const reservationObject = {
        //       Name,
        //       Gender,
        //       From,
        //       To,
        //       Date,
        //       Time,
        //       TicketFare,
        //       Note,
        //     };

        //     //save reservation to database
        //     const newReservation = await reservation_collection.create(
        //       reservationObject
        //     );

        //     // creating response status
        //     if (newReservation) {
        //       res.status(201).json({
        //         status: 'Success!',
        //         message: `Your reservation ID is: ${randomNumberof10()}`,
        //       });
        //     } else {
        //       res.status(500).json({
        //         status: 'Server Error',
        //         message: 'Server Error Occurred. Try Again Later.',
        //       });
        //     }
        //   }
        // } else {
        //   const err = {
        //     statusCode: 400,
        //     status: 'Bad Request',
        //     message: 'Input Data is problematic!',
        //   };
        //   next(err);
        // }
      } catch (err) {
        res.status(500).json({
          status: 'Server Error!',
          message: 'Internal Server Error Occurred. Try Again Later.',
        });
      }
    });
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);

//for checking server
app.get('/', (req, res) => {
  res.send('Train Ticket Reservation System Server Running');
});

app.listen(port, () => {
  console.log('Application is running on Port:', port);
});
