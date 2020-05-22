
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    email: String,
    username:String,
    password:String
});


var kullanici = new mongoose.model('kullanici',kullaniciSchema);

module.exports = kullanici;


