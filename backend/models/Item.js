const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  category: String,
  quantity: Number,
  expiry: Date,
  location: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "available" }
});

module.exports = mongoose.model("Item", itemSchema);
