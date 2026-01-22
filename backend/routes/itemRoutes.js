const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createItem,
  getItems,
  getRecommendedItems
} = require("../controllers/itemController");

router.post("/", auth, createItem);
router.get("/", getItems);
router.get("/recommend", auth, getRecommendedItems);

module.exports = router;
