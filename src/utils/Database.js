var mongoose = require('mongoose');

require("../models/Kullanici");

module.exports = {
    start (){
        return mongoose.connect('mongodb://localhost/yenidb')
        
    }
}