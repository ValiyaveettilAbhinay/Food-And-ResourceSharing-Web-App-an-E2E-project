const Request = require("../models/Request");
const Item = require("../models/Item");

// Send request for an item
exports.sendRequest = async (req, res) => {
  const { itemId } = req.body;

  const item = await Item.findById(itemId);
  if (!item || item.status !== "available") {
    return res.status(400).json({ msg: "Item not available" });
  }

  const request = await Request.create({
    item: itemId,
    requester: req.user.id
  });

  res.json(request);
};

// Approve or Reject request
exports.updateRequestStatus = async (req, res) => {
  const { requestId, status } = req.body;

  const request = await Request.findById(requestId).populate("item");
  if (!request) {
    return res.status(404).json({ msg: "Request not found" });
  }

  // Only item owner can approve/reject
  if (request.item.owner.toString() !== req.user.id) {
    return res.status(403).json({ msg: "Not authorized" });
  }

  request.status = status;
  await request.save();

  if (status === "approved") {
    request.item.status = "exchanged";
    await request.item.save();
  }

  res.json({ msg: `Request ${status}` });
};

// View my requests
exports.getMyRequests = async (req, res) => {
  const requests = await Request.find({ requester: req.user.id })
    .populate("item");

  res.json(requests);
};
