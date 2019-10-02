const User = require('../models/User');

module.exports = {
  async store(_req, _res) {
    const { email } = _req.body;
    const user = await User.create({ email });

    return _res.json(user);
  },
};