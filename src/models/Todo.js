var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    userType:String,
    userid:String,
    token: String,
    todo:  String,
});


var Todo = new mongoose.model('todo',todoSchema);

module.exports = Todo;
