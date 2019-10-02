const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
  thumbnail: String,
  company  : String,
  price    : Number,
  teches   : [String],
  user     : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User', 
  }
});

module.exports = mongoose.model('Spot', SpotSchema);