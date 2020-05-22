
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    userType: String,
    email: String,
    username:String,
    password:String,
    
});


var Kullanici = new mongoose.model('user',kullaniciSchema);

module.exports = Kullanici;


