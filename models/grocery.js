const mongoose = require("mongoose");
const uuid = require("uuid");

const GrocerySchema = mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  _id: { type: String, default: uuid.v1 },
  dateAdded: {
    type: Number,
    default: Date.now
  },
  dateExpire: {
    type: Number,
    required: true
  }
});

module.exports = Inventory = mongoose.model("Grocery", GrocerySchema);
