var mongoose = require('mongoose');
var RateSchema = new mongoose.Schema({
    key: String,
    value: Number,
    createdate: String
});
module.exports = mongoose.model('Rate',RateSchema);