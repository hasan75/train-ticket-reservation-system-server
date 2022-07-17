const formData = require('../model/formData');

// init model
const form = {};

const randomNumberof10 = () => {
  return Math.floor(Math.random() * 10000000000);
};

form.saveFormData = async (req, res, next) => {
  //   console.log(req);
  try {
    // console.log(req.body);

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
      typeof req.body.TicketFare === 'number' ? req.body.TicketFare : false;

    const Note =
      typeof req.body.Note === 'string' && req.body.Note.length > 0
        ? req.body.Note
        : false;

    if (Name && From && To && Date && Time && TicketFare && Note) {
      const reservation = await formData.findOne({ Name });
      //   console.log(reservation);
      if (reservation) {
        res.status(400).json({
          status: 'Error!!',
          message: 'This name already exists.',
        });
      } else {
        const reservationObject = {
          Name,
          Gender,
          From,
          To,
          Date,
          Time,
          TicketFare,
          Note,
        };
        // console.log('reservationobj', reservationObject);

        // save a to database
        const newReservation = await formData.create(reservationObject);

        console.log('new:', newReservation);

        //check and response success if application is inserted to database
        if (newReservation) {
          res.status(201).json({
            status: 'success',
            message: `Your reservation ID is: ${randomNumberof10()}`,
          });
        } else {
          // if reservation is not inserted
          res.status(500).json({
            status: 'server error',
            message: 'Server error! Try again later.',
          });
        }
      }
    } else {
      const err = {
        statusCode: 400,
        status: 'Bad Request!',
        message: 'Please check your input data',
      };
      next(err);
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      status: 'server error!',
      message: 'Server error! Try again later.',
    });
  }
};

module.exports = form;
