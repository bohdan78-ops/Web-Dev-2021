var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    role: String,
    name: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    tokens: String,
    // createdAt: dateTime;
    // updatedAt: dateTime;
});

var User = mongoose.model("User", userSchema);
module.exports = User;