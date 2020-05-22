var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tokenSchema = new Schema({
    userType: String,
    userid:String,
    username:String,
    password:String,
    token: String
});


var Token = new mongoose.model('token',tokenSchema);

module.exports = Token;
