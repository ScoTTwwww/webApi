var mongoose = require('mongoose');
var DatalistSchema = new mongoose.Schema({
    name: String,
    item: String,
    price: Number,
    text: String
});
module.exports = mongoose.model('Datalist', DatalistSchema);