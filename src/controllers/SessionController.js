const User = require('../models/User');

module.exports = {
  async store(_req, _res) {
    const { email } = _req.body;
    let user = await User.findOne({ email });

      if (!user) {
        
        const user = await User.create({ email });
      
      }

    return _res.json(user);
  },
};