// requiring what i will need for the app // 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 8000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget"|| "mongodb://jio:america1@ds141623.mlab.com:41623/heroku_ow1m6pjv", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// requiring a api.js //
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});