/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Middlware and setup
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// Get routes
router.get("/all-answers", (req, res) => {
  res.json({
    success: true,
    data: "Answer Routes"
  });
});

module.exports = router;
