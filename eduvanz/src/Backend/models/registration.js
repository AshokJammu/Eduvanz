var mongoose = require('mongoose')
var Schema = mongoose.Schema

var registration = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dob: { type: String, required: true },
    profession:{type: String, required:true},
    locality:{type: String, required:true},
    guests:{type:Number, required:true},
    address:{type:String, required:true}
})

module.exports = mongoose.model('registration', registration)