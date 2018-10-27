/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Get routes
router.get("/all-polls", (req, res) => {
  res.json({
    success: true,
    data: "Poll Routes"
  });
});

// Post routes
router.post("/create-poll", (req, res) => {
  res.json({
    success: true,
    data: "Sent"
  });
});

module.exports = router;
