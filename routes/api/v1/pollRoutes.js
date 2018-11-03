/* Poll Routes */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");

// Middlware and setup
const dbUsername = process.env.DB_USERNAME || "zornwebdev";
const dbPassword = process.env.DB_PASSWORD || "Baseball30!";

// Database Setup
mongoose.connect(
  `mongodb://${dbUsername}:${dbPassword}@ds143603.mlab.com:43603/poll-conf`
);

const Schema = mongoose.Schema;

const pollSchema = new Schema({
  title: String,
  author: String,
  question: String,
  created_at: Date,
  updated_at: Date
});

// Database Model
const Poll = mongoose.model("Poll", pollSchema);

// Get routes
router.get("/", async (req, res) => {
  const allPolls = await Poll.find({});
  const data = await allPolls;
  res.json({
    success: true,
    data: data
  });
});

// Post routes
router.post("/", (req, res) => {
  const addPoll = new Poll({
    title: req.body.title,
    author: req.body.author,
    question: req.body.question,
    created_at: moment(new Date()).format(),
    updated_at: moment(new Date()).format()
  });

  addPoll
    .save()
    .then(() => {
      res.json({
        success: true,
        data: req.body
      });
    })
    .catch(err =>
      res.json({
        success: false,
        error: err
      })
    );
});

// Delete Routes
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  const deletedPoll = await Poll.findByIdAndDelete(_id);

  if (deletedPoll) {
    res.json({
      success: true,
      message: "Poll Deleted",
      data: deletedPoll
    });
  } else {
    res.json({
      success: false,
      message: "Poll Not Found and Cannot be Deleted",
      data: {}
    });
  }
});

module.exports = router;
