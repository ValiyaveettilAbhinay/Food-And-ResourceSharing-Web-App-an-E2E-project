const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  sendRequest,
  updateRequestStatus,
  getMyRequests
} = require("../controllers/requestController");

router.post("/send", auth, sendRequest);
router.post("/update", auth, updateRequestStatus);
router.get("/my", auth, getMyRequests);

module.exports = router;
