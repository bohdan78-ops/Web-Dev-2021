var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cinemaSchema = new Schema({
    name: String,
    rows: Number,
    cols: Number,
});

var Cinema = mongoose.model("Cinema", cinemaSchema);
module.exports = Cinema;