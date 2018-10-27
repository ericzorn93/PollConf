/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Middlware and setup
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

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
