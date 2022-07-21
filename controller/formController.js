const reservation = require('../schema/reservation');

// init model
const form = {};

const randomNumberof10 = () => {
  return Math.floor(Math.random() * 10000000000);
};

form.saveFormData = async (req, res, next) => {
  //   console.log(req);
  try {
    // console.log(req.body, 'body');

    const Name =
      typeof req.body.Name === 'string' && req.body.Name.length > 0
        ? req.body.Name
        : false;

    const Gender =
      typeof req.body.Gender === 'string' && req.body.Gender.length > 0
        ? req.body.Gender
        : false;

    const From =
      typeof req.body.From === 'string' && req.body.From.length > 0
        ? req.body.From
        : false;

    const To =
      typeof req.body.From === 'string' && req.body.From.length > 0
        ? req.body.To
        : false;

    const Date =
      typeof req.body.Date === 'string' && req.body.Date.length > 0
        ? req.body.Date
        : false;

    const Time =
      typeof req.body.Time === 'string' && req.body.Time.length > 0
        ? req.body.Time
        : false;

    const TicketFare =
      typeof req.body.TicketFare === 'number' ||
      typeof req.body.TicketFare === 'string'
        ? req.body.TicketFare
        : false;

    const Note =
      typeof req.body.Note === 'string' && req.body.Note.length > 0
        ? req.body.Note
        : false;

    // console.log(Name, Gender, From, To, Date, Time, TicketFare, Note);

    if (Name && From && To && Date && Time && TicketFare && Note) {
      const aReservation = await reservation.findOne({ Name });
      //   console.log(aReservation);
      if (aReservation) {
        res.status(400).json({
          status: 'Error!!',
          message: 'This name already exists.',
        });
      } else {
        // console.log({
        //   Name,
        //   Gender,
        //   From,
        //   To,
        //   Date,
        //   Time,
        //   TicketFare,
        //   Note,
        // });

        // console.log(TicketFare, 'TicketFare');

        // const fareJPY = Math.floor(TicketFare * 1.47);
        // console.log(fareJPY, 'TicketInJPY');

        const anotherReservation = {
          Name,
          Gender,
          From,
          To,
          Date,
          Time,
          TicketFare,
          Note,
        };

        // anotherReservation.TicketFare = fareJPY;

        // const newReservation = await reservation.create({
        //   Name,
        //   Gender,
        //   From,
        //   To,
        //   Date,
        //   Time,
        //   TicketFare,
        //   Note,
        // });

        const newReservation = await reservation.create(anotherReservation);

        console.log('new:', newReservation);

        //if reservationForm data inserted to the database
        if (newReservation) {
          res.status(201).json({
            status: 'success',
            message: `Your reservation ID is: ${randomNumberof10()}!`,
          });
        } else {
          // if reservation is not inserted
          res.status(500).json({
            status: 'server error',
            message: 'Server error! Try again later(No NEWRESERVATION).',
          });
        }
      }
    } else {
      const err = {
        statusCode: 400,
        status: 'Bad Request!',
        message: 'Please check your input data again.',
      };
      next(err);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'server error!',
      message: 'Server error! Try again later(catch)',
    });
  }
};

module.exports = form;
