// Imports
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const chalk = require("chalk");

// Routing Imports
const pollRoutes = require("./routes/pollRoutes");
const answerRoutes = require("./routes/answerRoutes");

// Init Express App
const app = express();

// Serverside middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Port Setup
const port = process.env.PORT || 3000;

// Routing
app.use("/poll", pollRoutes);
app.use("/answer", answerRoutes);

// Server Listen
app.listen(port, () =>
  console.log(chalk.yellow.bgBlue.bold(`Server listening on port: ${port}`))
);
