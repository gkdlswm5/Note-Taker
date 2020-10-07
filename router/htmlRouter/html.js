var path = require("path");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });
};
