var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  userName: String, 
  password: String,
  nickName: String,
  email: String,
  introduce: String,
});
module.exports = mongoose.model('User', UserSchema);