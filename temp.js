//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb://localhost:27017/myRandomDB",options, function (err, db) {
  if (err) throw err;
});

app.listen(6000, function () {
  console.log("Server started on port 6000");
});

