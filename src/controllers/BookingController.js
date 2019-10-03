const Booking = require('../models/Booking');

module.exports = {
  async store(_req, _res) {
    const { user_id } = _req.headers;
    const { spot_id } = _req.params;
    const { date }    = _req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    return _res.json(booking);
  },  
};