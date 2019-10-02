const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
  async store(_req, _res) {
    const { filename }              = _req.file;
    const { company, price, techs } = _req.body;
    const { user_id }               = _req.headers;

    const user = await User.findById(user_id);

    if (!user) {

      return _res.status(400).json({ error: "User does not exist!"})
    
    };
    
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