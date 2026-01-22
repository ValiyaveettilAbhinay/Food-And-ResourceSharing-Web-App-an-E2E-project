const Item = require("../models/Item");
const User = require("../models/User");
const { recommendItems } = require("../utils/recommend");

// CREATE ITEM
const createItem = async (req, res) => {
  const item = await Item.create({
    ...req.body,
    owner: req.user.id
  });
  res.json(item);
};

// GET ALL ITEMS
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// RECOMMENDED ITEMS
const getRecommendedItems = async (req, res) => {
  const user = await User.findById(req.user.id);
  const items = await Item.find({ status: "available" });

  const recommended = recommendItems(items, user);
  res.json(recommended);
};

// ✅ EXPORT EVERYTHING TOGETHER
module.exports = {
  createItem,
  getItems,
  getRecommendedItems
};
