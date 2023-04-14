const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
Vegetable_name: String,
Vegetable_colour: String,
vegetable_price:String,
cost: Number
})
module.exports = mongoose.model("Vegetables",vegetableSchema)

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});