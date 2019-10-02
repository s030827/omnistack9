const Spot = require('../models/Spot');

module.exports = {
  async store(_req, _res) {
    const { filename }              = _req.file;
    const { company, price, techs } = _req.body;
    const { user_id }               = _req.headers;

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim())
    });

    return _res.json(spot);
  },
};