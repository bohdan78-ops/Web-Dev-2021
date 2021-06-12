var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tourSchema = new Schema({
    title: String,
    route: String,
    days: String,
    price: Number
});

var Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;