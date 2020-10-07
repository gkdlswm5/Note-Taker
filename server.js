// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// import file from "./public/index.html";

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8000;

var db = require("./db/db.json");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./router/apiRouter/api")(app);
require("./router/htmlRouter/html")(app);

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
