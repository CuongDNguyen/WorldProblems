var db = require("../models");

module.exports = function(app) {
  // Get all Solutions
  app.get("/api/Solutions", function(req, res) {
    db.Solution.findAll({}).then(function(dbSolutions) {
      res.json(dbSolutions);
    });
  });

  // Create a new example
  app.post("/api/Solutions", function(req, res) {
    db.Solution.create(req.body).then(function(dbSolution) {
      res.json(dbSolution);
    });
  });

  // Delete an Solution by id
  app.delete("/api/Solutions/:id", function(req, res) {
    db.Solution.destroy({ where: { id: req.params.id } }).then(function(dbSolution) {
      res.json(dbSolution);
    });
  });
};
