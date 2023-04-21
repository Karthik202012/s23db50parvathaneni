const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
Vegetable_name: String,
Vegetable_colour: String,
vegetable_price:String,
cost: Number
})
module.exports = mongoose.model("Vegetables",vegetableSchema)
