var mongoose = require('mongoose');
var TourSchema = new mongoose.Schema({
  name: String, 
  imgurl: String,
  location: String,
  price: Number,
  rating: Number,
});
module.exports = mongoose.model('Tour', TourSchema);