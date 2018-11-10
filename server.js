// Imports
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const chalk = require("chalk");
const cors = require("cors");

// Routing Imports
const pollRoutes = require("./routes/api/v1/pollRoutes");

// Init Express App
const app = express();

// Serverside middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Port Setup
const port = process.env.PORT || 3001;

// Routing
app.use("/api/poll", pollRoutes);

// Server Listen
app.listen(port, () =>
  console.log(chalk.yellow.bgBlue.bold(`Server listening on port: ${port}`))
);
