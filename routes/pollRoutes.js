/* Poll Routes */
const express = require("express");
const router = express.Router();

// Get routes
router.get("/all-polls", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
