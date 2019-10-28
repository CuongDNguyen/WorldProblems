var db = require("../models");

module.exports = function(app) {
  // Get all Authors
  app.get("/api/Authors", function(req, res) {
    db.Author.findAll({}).then(function(dbAuthors) {
      res.json(dbAuthors);
    });
  });

  // Create a new example
  app.post("/api/Authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Delete an Author by id
  app.delete("/api/Authors/:id", function(req, res) {
    db.Author.destroy({ where: { id: req.params.id } }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};
