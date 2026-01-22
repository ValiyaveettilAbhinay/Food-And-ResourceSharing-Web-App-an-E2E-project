const User = require("../models/User");
const Item = require("../models/Item");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getAllItems = async (req, res) => {
  const items = await Item.find().populate("owner", "name email");
  res.json(items);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: "Item removed by admin" });
};
