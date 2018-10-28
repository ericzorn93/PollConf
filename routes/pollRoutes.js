/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");

// Middlware and setup
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// Database Setup
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  title: String,
  author: String,
  question: String,
  created_at: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")
});

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
