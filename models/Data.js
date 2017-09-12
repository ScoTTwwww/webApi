var mongoose = require('mongoose');
var DataSchema = new mongoose.Schema({
    name: String,
    item: String,
    price: Number,
    text: String
});
module.exports = mongoose.model('Data', DataSchema);