const Spot = require('../models/Spot');

module.exports = {
  async show(_req, _res) {
    const { user_id } = _req.headers;
    const spot = await Spot.find({ user: user_id });

    return _res.json(spot);
  },
};