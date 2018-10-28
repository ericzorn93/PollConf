/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");

// Middlware and setup
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// Database Setup
mongoose.connect(
  `mongodb://${dbUsername}:${dbPassword}@ds143603.mlab.com:43603/poll-conf`
);
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  title: String,
  author: String,
  question: String,
  created_at: Date
});

const Poll = mongoose.model("Poll", pollSchema);

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
    data: "sent"
  });
});

module.exports = router;
