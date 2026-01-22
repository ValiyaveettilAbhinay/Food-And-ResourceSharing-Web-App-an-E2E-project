const Item = require("../models/Item");
const Request = require("../models/Request");

exports.getDashboardData = async (req, res) => {
  const userId = req.user.id;

  const postedItems = await Item.countDocuments({ owner: userId });
  const exchangedItems = await Item.countDocuments({
    owner: userId,
    status: "exchanged"
  });

  const requestsSent = await Request.countDocuments({ requester: userId });

  res.json({
    postedItems,
    exchangedItems,
    requestsSent,
    wasteReduced: exchangedItems * 1 // 1 unit per item (dummy metric)
  });
};
