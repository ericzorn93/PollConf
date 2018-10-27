const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Init Express App
const app = express();

// Serverside middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Port Setup
const port = process.env.PORT || 3000;

// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));
