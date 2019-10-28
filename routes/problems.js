var db = require("../models");

module.exports = function(app) {
  // Get all problems
  app.get("/api/problems", function(req, res) {
    db.Problem.findAll({}).then(function(dbProblems) {
      res.json(dbProblems);
    });
  });

  // Create a new example
  app.post("/api/problems", function(req, res) {
    db.Problem.create(req.body).then(function(dbProblem) {
      res.json(dbProblem);
    });
  });

  // Delete an problem by id
  app.delete("/api/problems/:id", function(req, res) {
    db.Problem.destroy({ where: { id: req.params.id } }).then(function(dbProblem) {
      res.json(dbProblem);
    });
  });
};
