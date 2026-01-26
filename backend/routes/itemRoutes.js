const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createItem,
  getItems,
  getRecommendedItems
} = require("../controllers/itemController");

// ... existing imports
// const auth = require("../middleware/authMiddleware");

// Note: Ensure your auth middleware doesn't block the request if no token is found 
// OR create a separate 'optionalAuth' middleware for this.
router.get("/", auth, getItems); 
// ...
router.post("/", auth, createItem);
router.get("/", getItems);
router.get("/recommend", auth, getRecommendedItems);

module.exports = router;
