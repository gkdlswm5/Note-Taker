var db = require("../../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    const { title, text } = req.body;
    const data = {
      title: title,
      text: text,
      id: db.length + 1}
    db.push(data);
    console.log(db);
  });

  app.delete("/app/notes/:id", function (req, res) {
    console.log(req.params);
    for (const data in db) {
      if (data.id === req.params.id) {
        var target = data.indexOf(value)
        db.splice(target, 1)

        for (let i = 0; i > db.length; i++) {
          db[i].id = i+1
        }
      }
    }
  });
};
