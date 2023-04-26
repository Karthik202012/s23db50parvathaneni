const mongoose = require("mongoose");

const vegetableSchema = mongoose.Schema({
    Vegetable_name: { 
    type: String 
  },
  Vegetable_colour: { 
    type: String 
  },
  vegetable_price: {
    type: Number,
    min: [0, "Price must be min 0"],
    max: [100000, "Price must be max 100000"]
  },
});
module.exports = mongoose.model("Vegetables", vegetableSchema);
