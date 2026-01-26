const Item = require("../models/Item");
const User = require("../models/User");
const Request = require("../models/Request"); // Need this to check status
const { recommendItems } = require("../utils/recommend");

// CREATE ITEM (Unchanged)
const createItem = async (req, res) => {
  const item = await Item.create({
    ...req.body,
    owner: req.user.id
  });
  res.json(item);
};

// GET ALL ITEMS (Updated to include current user's request status)
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    
    // Check if a user is logged in (via middleware)
    const userId = req.user ? req.user.id : null;

    const itemsWithStatus = await Promise.all(items.map(async (item) => {
      let userRequestStatus = null;
      
      if (userId) {
        const existingRequest = await Request.findOne({ 
          item: item._id, 
          requester: userId 
        });
        if (existingRequest) userRequestStatus = existingRequest.status;
      }

      return {
        ...item._doc,
        userRequestStatus // Will be 'pending', 'approved', 'rejected', or null
      };
    }));

    res.json(itemsWithStatus);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// RECOMMENDED ITEMS (Unchanged)
const getRecommendedItems = async (req, res) => {
  const user = await User.findById(req.user.id);
  const items = await Item.find({ status: "available" });
  const recommended = recommendItems(items, user);
  res.json(recommended);
};

module.exports = { createItem, getItems, getRecommendedItems };