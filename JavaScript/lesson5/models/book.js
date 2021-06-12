var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    "author": String,
    "title": String,
    "isPresent": Boolean
});

var Book = mongoose.model("Book", bookSchema);
module.exports = Book;