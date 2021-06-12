var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: String,
    country: String,
    subcountry: String,
    geonameid: String,
});

var City = mongoose.model("City", citySchema);
module.exports = City;