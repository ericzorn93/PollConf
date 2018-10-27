/* Poll Routes */
const express = require("express");
const router = express.Router();

// Get routes
router.get("/all-answers", (req, res) => {
  res.json({
    success: true,
    data: "Answer Routes"
  });
});

module.exports = router;
